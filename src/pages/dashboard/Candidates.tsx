import { useState, useEffect } from "react";
import axios from "axios";
import { getDateOnly } from "../../components/addons/DateMesc";

interface Candidate {
    _id: string;
    fullName: string;
    email: string;
    phone: string;
    positionApplied: string;
    appliedOn: string;
    status: string;
    resumeUrl: string;
}

export default function Candidates() {
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [filteredCandidates, setFilteredCandidates] = useState<Candidate[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [showDateFilter, setShowDateFilter] = useState(false);
    const [dateFilter, setDateFilter] = useState({ start: "", end: "" });
    const [pendingDateFilter, setPendingDateFilter] = useState({ start: "", end: "" });

    const [showAddModal, setShowAddModal] = useState(false);
    const [addForm, setAddForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        positionApplied: "",
        appliedOn: "",
        status: "",
        resume: null as File | null,
    });
    const [addLoading, setAddLoading] = useState(false);

    useEffect(() => {
        const fetchCandidates = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get("http://localhost:3001/hr/candidates", {
                    withCredentials: true,
                });
                setCandidates(response.data.candidates || []);
                setFilteredCandidates(response.data.candidates || []);
            } catch (err: any) {
                setError(err.response?.data?.message || "Error fetching candidates");
            } finally {
                setLoading(false);
            }
        };
        fetchCandidates();
    }, []);


    const filterCandidates = (query: string, start: string, end: string) => {
        let filtered = candidates;

        if (query.trim() !== "") {
            filtered = filtered.filter((c) =>
                c.fullName.toLowerCase().includes(query.toLowerCase()) ||
                c.email.toLowerCase().includes(query.toLowerCase()) ||
                c.phone.toLowerCase().includes(query.toLowerCase()) ||
                c.positionApplied.toLowerCase().includes(query.toLowerCase()) ||
                c.status.toLowerCase().includes(query.toLowerCase())
            );
        }

        if (start && end) {
            filtered = filtered.filter((c) => {
                const applied = c.appliedOn.slice(0, 10);
                return applied >= start && applied <= end;
            });
        }

        setFilteredCandidates(filtered);
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        filterCandidates(query, dateFilter.start, dateFilter.end);
    };

    const handleOpenDateFilter = () => {
        setPendingDateFilter(dateFilter);
        setShowDateFilter((prev) => !prev);
    };

    const handleAddInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, files } = e.target as any;
        if (name === "resume") {
            setAddForm((prev) => ({ ...prev, resume: files[0] }));
        } else {
            setAddForm((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleAddCandidate = async (e: React.FormEvent) => {
        e.preventDefault();
        setAddLoading(true);
        try {
            const formData = new FormData();
            formData.append("fullName", addForm.fullName);
            formData.append("email", addForm.email);
            formData.append("phone", addForm.phone);
            formData.append("positionApplied", addForm.positionApplied);
            formData.append("appliedOn", addForm.appliedOn);
            formData.append("status", addForm.status);
            if (addForm.resume) formData.append("resume", addForm.resume);

            await axios.post("http://localhost:3001/hr/candidates", {
                fullName: addForm.fullName,
                email: addForm.email,
                phone: addForm.phone,
                positionApplied: addForm.positionApplied,
                appliedOn: addForm.appliedOn,
            }, {
                withCredentials: true,
            });


            const response = await axios.get("http://localhost:3001/hr/candidates", {
                withCredentials: true,
            });
            setCandidates(response.data.candidates || []);
            setFilteredCandidates(response.data.candidates || []);
            setShowAddModal(false);
            setAddForm({
                fullName: "",
                email: "",
                phone: "",
                positionApplied: "",
                appliedOn: "",
                status: "",
                resume: null,
            });
        } catch (err: any) {
            alert(err.response?.data?.message || "Failed to add candidate");
        } finally {
            setAddLoading(false);
        }
    };

    return (
        <div className="w-full h-full rounded-[10px] flex flex-col gap-6 mt-5">
            <h2 className="text-2xl font-bold mb-4">Job Candidates</h2>
            <div className="flex items-center justify-between mb-6">
                <div className="relative flex items-center gap-3">
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="pl-4 pr-24 py-3 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                        className="px-4 py-3 rounded-md bg-purple-primary-500 text-white hover:bg-purple-500"
                        onClick={() => handleSearch(searchQuery)}
                    >
                        Search
                    </button>
                </div>
                <div className="flex gap-2">
                    <button
                        className="px-4 py-2 rounded-md bg-purple-primary-500 text-white hover:bg-purple-500"
                        onClick={() => setShowAddModal(true)}
                    >
                        Add Candidate
                    </button>
                    <div
                        className="cursor-pointer border rounded-[10px] flex justify-center items-center h-[50px] w-[60px] bg-white relative"
                        onClick={handleOpenDateFilter}
                        title="Filter by applied date"
                    >
                        <img className="w-6 h-6" src="/src/assets/filter.svg" alt="Filter Icon" />
                        {showDateFilter && (
                            <div
                                className="absolute top-14 right-0 bg-white border rounded-lg shadow-lg p-4 z-50 min-w-[220px]"
                                onClick={e => e.stopPropagation()}
                            >
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs text-gray-700">Start Date</label>
                                    <input
                                        type="date"
                                        value={pendingDateFilter.start}
                                        onChange={e => setPendingDateFilter({ ...pendingDateFilter, start: e.target.value })}
                                        className="border rounded px-2 py-1"
                                    />
                                    <label className="text-xs text-gray-700">End Date</label>
                                    <input
                                        type="date"
                                        value={pendingDateFilter.end}
                                        onChange={e => setPendingDateFilter({ ...pendingDateFilter, end: e.target.value })}
                                        className="border rounded px-2 py-1"
                                    />
                                    <button
                                        className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                                        onClick={() => {
                                            setDateFilter(pendingDateFilter);
                                            filterCandidates(searchQuery, pendingDateFilter.start, pendingDateFilter.end);
                                            setShowDateFilter(false);
                                        }}
                                    >
                                        Apply
                                    </button>
                                    <button
                                        className="mt-1 px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                                        onClick={() => {
                                            setPendingDateFilter({ start: "", end: "" });
                                            setDateFilter({ start: "", end: "" });
                                            filterCandidates(searchQuery, "", "");
                                            setShowDateFilter(false);
                                        }}
                                    >
                                        Clear
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-full h-full border rounded-lg flex flex-col gap-6 bg-white shadow-md">
                {loading ? (
                    <p className="p-4">Loading candidates...</p>
                ) : error ? (
                    <p className="p-4 text-red-500">{error}</p>
                ) : (
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Designation
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Applied on
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Phone
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Resume
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white w-auto divide-y divide-gray-200">
                            {filteredCandidates.map((candidate) => (
                                <tr key={candidate._id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {candidate.fullName}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {candidate.positionApplied}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {getDateOnly(candidate.appliedOn)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {candidate.email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {candidate.phone}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {candidate.status}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        {candidate.resumeUrl ? (
                                            <a
                                                href={candidate.resumeUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                View Resume
                                            </a>
                                        ) : (
                                            <span className="text-gray-400">No Resume</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {showAddModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg relative">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                            onClick={() => setShowAddModal(false)}
                        >
                            &times;
                        </button>
                        <h3 className="text-xl font-semibold mb-4">Add Candidate</h3>
                        <form onSubmit={handleAddCandidate} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={addForm.fullName}
                                    onChange={handleAddInputChange}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={addForm.email}
                                    onChange={handleAddInputChange}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={addForm.phone}
                                    onChange={handleAddInputChange}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Designation</label>
                                <input
                                    type="text"
                                    name="positionApplied"
                                    value={addForm.positionApplied}
                                    onChange={handleAddInputChange}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Applied On</label>
                                <input
                                    type="date"
                                    name="appliedOn"
                                    value={addForm.appliedOn}
                                    onChange={handleAddInputChange}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Status</label>
                                <select
                                    name="status"
                                    value={addForm.status}
                                    onChange={handleAddInputChange}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                >
                                    <option value="">Select Status</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Shortlisted">Shortlisted</option>
                                    <option value="Rejected">Rejected</option>
                                    <option value="Hired">Hired</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Resume (PDF)</label>
                                <input
                                    type="file"
                                    name="resume"
                                    accept=".pdf"
                                    onChange={handleAddInputChange}
                                    className="mt-1 block w-full"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={addLoading}
                                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                {addLoading ? "Adding..." : "Add Candidate"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}