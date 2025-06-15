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

    const handleModalClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target as HTMLInputElement;
        console.log(name, value)
        const checked = (e.target as HTMLInputElement).checked;
        setEmployee(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async () => {
        if (!employee.username) {
            return;
        }
        alert(employee.username);

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
        <div
            className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-opacity-50 overflow-y-scroll"
            onClick={onClose}
        >
            <div
                className="bg-white p-8 rounded-lg shadow-lg w-6/12 flex flex-col gap-6"
                onClick={handleModalClick}
            >
                <h2 className="text-xl font-semibold text-center">Create New Employee</h2>
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-4">
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
                    </div>
                    <div className="flex flex-col gap-4">
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
                            <label className="block text-sm font-medium text-gray-700">Full Address</label>
                            <input
                                type="text"
                                name="fullAddress"
                                onChange={handleChange}
                                value={employee.fullAddress}
                                placeholder="Full Address"
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
                <div className="flex justify-end gap-4 w-11/12 mt-5">
                    <button
                        className="px-8 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-11 py-2 bg-purple-primary-500 text-white rounded-md hover:bg-purple-600"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddEmployeeModal;