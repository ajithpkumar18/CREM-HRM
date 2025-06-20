import React, { useEffect, useState } from 'react';
import axios from 'axios';

type CreateLeadModalProps = {
    onClose: () => void;
};

const CreateLeadModal: React.FC<CreateLeadModalProps> = ({ onClose }) => {
    const [lead, setLead] = useState({
        contactPerson: '',
        contactNumber: '',
        email: '',
        website: '',
        marketNiche: '',
        service: '',
        assignedTo: '',
        status: ''
    });

    const [employees, setEmployees] = useState<{ id: string; fullName: string }[]>([]);
    const [filteredEmployees, setFilteredEmployees] = useState<{ id: string; fullName: string }[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('http://localhost:3001/hr/employees', {
                    withCredentials: true,
                });
                setEmployees(response.data.map((emp: any) => ({ id: emp.companyID, fullName: emp.fullName })));
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };

        fetchEmployees();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setLead((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name === 'assignedTo') {
            const filtered = employees.filter((emp) =>
                emp.fullName.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredEmployees(filtered);
            setShowSuggestions(true);
        }
    };

    const handleSuggestionClick = (employee: { id: string; fullName: string }) => {
        setLead((prev) => ({
            ...prev,
            assignedTo: employee.id,
        }));
        setShowSuggestions(false);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3001/hr/leads', lead, {
                withCredentials: true,
            });
            alert('Lead created successfully!');
            onClose();
        } catch (error) {
            console.error('Error creating lead:', error);
            alert('Failed to create lead. Please try again.');
        }
    };

    return (
        <div className="fixed inset-0 pt-32 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
            <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between border-b pb-4">
                    <h2 className="text-xl font-semibold text-gray-900">Create New Lead</h2>
                    <button
                        type="button"
                        className="text-gray-400 hover:text-gray-900"
                        onClick={onClose}
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>


                <div className="space-y-4 mt-4">
                    <div>
                        <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">
                            Contact Person
                        </label>
                        <input
                            type="text"
                            id="contactPerson"
                            name="contactPerson"
                            value={lead.contactPerson}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            placeholder="Enter Contact Person"
                        />
                    </div>
                    <div>
                        <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                            Contact Number
                        </label>
                        <input
                            type="text"
                            id="contactNumber"
                            name="contactNumber"
                            value={lead.contactNumber}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            placeholder="Enter Contact Number"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={lead.email}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            placeholder="Enter Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                            Website
                        </label>
                        <input
                            type="text"
                            id="website"
                            name="website"
                            value={lead.website}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            placeholder="Enter Website Link"
                        />
                    </div>
                    <div>
                        <label htmlFor="marketNiche" className="block text-sm font-medium text-gray-700">
                            Market Niche
                        </label>
                        <input
                            type="text"
                            id="marketNiche"
                            name="marketNiche"
                            value={lead.marketNiche}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            placeholder="Enter Market Niche"
                        />
                    </div>
                    <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                            Service
                        </label>
                        <input
                            type="text"
                            id="service"
                            name="service"
                            value={lead.service}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            placeholder="Enter Service"
                        />
                    </div>
                    <div>
                        <label htmlFor="assignedTo" className="block text-sm font-medium text-gray-700">
                            Assigned To
                        </label>
                        <input
                            type="text"
                            id="assignedTo"
                            name="assignedTo"
                            value={lead.assignedTo}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            placeholder="Type employee name"
                            autoComplete="off"
                            onFocus={() => setShowSuggestions(true)}
                        />
                        {showSuggestions && filteredEmployees.length > 0 && (
                            <ul className="border border-gray-300 rounded-md shadow-md bg-white mt-1 max-h-40 overflow-y-auto">
                                {filteredEmployees.map((employee) => (
                                    <li
                                        key={employee.id}
                                        className="p-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleSuggestionClick(employee)}
                                    >
                                        {employee.fullName}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                            Status
                        </label>
                        <select
                            id="status"
                            name="status"
                            value={lead.status}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        >
                            <option value="" disabled>
                                Select Status
                            </option>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                </div>

                <div className="mt-6 flex justify-end space-x-4">
                    <button
                        type="button"
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateLeadModal;