import React, { useEffect, useState } from 'react';
import axios from 'axios';

type CreateLeavesModalProps = {
    onClose: () => void;
};

const AddLeavesModal: React.FC<CreateLeavesModalProps> = ({ onClose }) => {
    const [leaves, setLeaves] = useState({
        companyID: "",
        leaveType: "",
        startDate: "",
        endDate: "",
        reason: "",
        status: "",
        approvedBy: "",
        comments: ""
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setLeaves((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name === 'companyID') {
            const filtered = employees.filter((emp) =>
                emp.fullName.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredEmployees(filtered);
            setShowSuggestions(true);
        }
    };

    const handleSuggestionClick = (employee: { id: string; fullName: string }) => {
        setLeaves((prev) => ({
            ...prev,
            companyID: employee.id,
        }));
        setShowSuggestions(false);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3001/hr/leaves', leaves, {
                withCredentials: true,
            });
            alert('Leave created successfully!');
            onClose();
        } catch (error) {
            console.error('Error creating leave:', error);
            alert('Failed to create leave. Please try again.');
        }
    };

    return (
        <div className="fixed inset-0 z-50 pt-40 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
                <h2 className="text-xl font-semibold mb-4 text-center">Create New Leave</h2>
                <div className="space-y-4">

                    <div>
                        <label htmlFor="companyID" className="block text-sm font-medium text-gray-700">
                            Company ID
                        </label>
                        <input
                            type="text"
                            id="companyID"
                            name="companyID"
                            value={leaves.companyID}
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
                        <label htmlFor="leaveType" className="block text-sm font-medium text-gray-700">
                            Leave Type
                        </label>
                        <select
                            id="leaveType"
                            name="leaveType"
                            value={leaves.leaveType}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        >
                            <option value="" disabled>
                                Select Leave Type
                            </option>
                            <option value="Sick Leave">Sick Leave</option>
                            <option value="Casual Leave">Casual Leave</option>
                            <option value="Earned Leave">Earned Leave</option>
                            <option value="Maternity Leave">Maternity Leave</option>
                            <option value="Paternity Leave">Paternity Leave</option>
                            <option value="Unpaid Leave">Unpaid Leave</option>
                        </select>
                    </div>


                    <div>
                        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                            Start Date
                        </label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={leaves.startDate}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                    </div>


                    <div>
                        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                            End Date
                        </label>
                        <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            value={leaves.endDate}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                    </div>


                    <div>
                        <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
                            Reason
                        </label>
                        <textarea
                            id="reason"
                            name="reason"
                            value={leaves.reason}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            placeholder="Enter the reason for leave"
                        ></textarea>
                    </div>


                    <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                            Status
                        </label>
                        <select
                            id="status"
                            name="status"
                            value={leaves.status}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        >
                            <option value="" disabled>
                                Select Status
                            </option>
                            <option value="Pending">Pending</option>
                            <option value="Approved">Approved</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="approvedBy" className="block text-sm font-medium text-gray-700">
                            Approved By
                        </label>
                        <input
                            type="text"
                            id="approvedBy"
                            name="approvedBy"
                            value={leaves.approvedBy}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            placeholder="Enter approver's name"
                        />
                    </div>

                    <div>
                        <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
                            Comments
                        </label>
                        <textarea
                            id="comments"
                            name="comments"
                            value={leaves.comments}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            placeholder="Enter comments"
                        ></textarea>
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

export default AddLeavesModal;