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
                console.log(response.data)
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

            const filtered = employees.filter((emp) => {
                console.log(emp.fullName);
                return emp.fullName.toLowerCase().includes(value.toLowerCase());
            }
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
        console.log(employee.id);

        setShowSuggestions(false);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3001/hr/leads', lead, {
                withCredentials: true,
            });
            alert('Lead created successfully!');
            console.log('Response:', response.data);
            onClose();
        } catch (error) {
            console.error('Error creating lead:', error);
            alert('Failed to create lead. Please try again.');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 overflow-scroll">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4 text-center">Create New Lead</h2>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">
                            Contact Person
                        </label>
                        <input
                            type="text"
                            id="contactPerson"
                            name="contactPerson"
                            value={lead.contactPerson}
                            onChange={(e) => handleChange({ target: { name: e.target.name, value: e.target.value } } as React.ChangeEvent<HTMLInputElement>)}
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
                            onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            placeholder="Enter Contact Number"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={lead.email}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            placeholder="Enter Contact Number"
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
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
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
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
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
                        className="px-4 py-2 bg-purple-primary-500 text-white rounded-md flex items-center space-x-2 hover:bg-purple-primary-600"
                    >
                        <img src="/src/assets/plus.svg" alt="Add" className="w-5 h-5" />
                        <span>Add Lead</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateLeadModal;