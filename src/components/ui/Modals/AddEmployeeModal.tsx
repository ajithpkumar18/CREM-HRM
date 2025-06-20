import axios from 'axios';
import React, { useState } from 'react';

interface AddEmployeeModalProps {
    onClose: () => void;
}

const AddEmployeeModal: React.FC<AddEmployeeModalProps> = ({ onClose }) => {
    const [employee, setEmployee] = useState({
        username: '',
        email: '',
        password: '',
        isAdmin: false,
        role: 'Employee',
        companyID: '',
        fullName: '',
        residence: '',
        dateOfBirth: '',
        fullAddress: '',
        designation: '',
        empRole: '',
        empType: '',
        team: '',
        dateOfJoining: '',
        dateOfLeaving: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target as HTMLInputElement;
        const checked = (e.target as HTMLInputElement).checked;
        setEmployee(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async () => {
        if (!employee.username) {
            alert("Username is required");
            return;
        }

        try {
            await axios.post('http://localhost:3001/hr/employee', employee, {
                withCredentials: true
            });
            alert("Employee added successfully!");
            onClose();
        } catch (error) {
            console.error("Error adding employee:", error);
            if (axios.isAxiosError(error) && error.response?.data?.message) {
                alert(`Failed to add employee: ${error.response.data.message}`);
            } else {
                alert("Failed to add employee");
            }
        }
    };

    return (
        <div id="add-employee-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-scroll">
            <div className="relative p-4 w-full max-w-4xl max-h-full">

                <div className="relative bg-white rounded-lg shadow-sm">

                    <div className="flex items-center justify-between p-4 border-b border-gray-200 rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900">Create New Employee</h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
                            onClick={onClose}
                        >
                            <svg
                                className="w-3 h-3"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="p-4 space-y-4">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    onChange={handleChange}
                                    value={employee.username}
                                    placeholder="Username"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    value={employee.email}
                                    placeholder="Email"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    value={employee.password}
                                    placeholder="Password"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Is Admin</label>
                                <input
                                    type="checkbox"
                                    name="isAdmin"
                                    onChange={handleChange}
                                    checked={employee.isAdmin}
                                    className="mt-1"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Role</label>
                                <select
                                    name="role"
                                    onChange={handleChange}
                                    value={employee.role}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                >
                                    <option value="HR">HR</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Employee">Employee</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Company ID</label>
                                <input
                                    type="text"
                                    name="companyID"
                                    onChange={handleChange}
                                    value={employee.companyID}
                                    placeholder="Company ID"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    onChange={handleChange}
                                    value={employee.fullName}
                                    placeholder="Full Name"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Residence</label>
                                <input
                                    type="text"
                                    name="residence"
                                    onChange={handleChange}
                                    value={employee.residence}
                                    placeholder="Residence"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    onChange={handleChange}
                                    value={employee.dateOfBirth}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Designation</label>
                                <input
                                    type="text"
                                    name="designation"
                                    onChange={handleChange}
                                    value={employee.designation}
                                    placeholder="Designation"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Employee Role</label>
                                <input
                                    type="text"
                                    name="empRole"
                                    onChange={handleChange}
                                    value={employee.empRole}
                                    placeholder="Employee Role"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Employee Type</label>
                                <select
                                    name="empType"
                                    onChange={handleChange}
                                    value={employee.empType}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                >
                                    <option value="">Select Type</option>
                                    <option value="office">Office</option>
                                    <option value="remote">Remote</option>
                                    <option value="hybrid">Hybrid</option>
                                    <option value="part-time">Part-Time</option>
                                    <option value="full-time">Full-Time</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Team</label>
                                <input
                                    type="text"
                                    name="team"
                                    onChange={handleChange}
                                    value={employee.team}
                                    placeholder="Team"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Date of Joining</label>
                                <input
                                    type="date"
                                    name="dateOfJoining"
                                    onChange={handleChange}
                                    value={employee.dateOfJoining}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Date of Leaving</label>
                                <input
                                    type="date"
                                    name="dateOfLeaving"
                                    onChange={handleChange}
                                    value={employee.dateOfLeaving}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center p-4 border-t border-gray-200 rounded-b">
                        <button
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            className="py-2.5 px-8 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEmployeeModal;