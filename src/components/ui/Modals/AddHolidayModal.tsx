import React, { useState } from 'react';
import axios from 'axios';

type HolidayModalProps = {
    onClose: () => void;
};

const CreateHolidayModal: React.FC<HolidayModalProps> = ({ onClose }) => {
    const [holiday, setHoliday] = useState({
        holidayName: '',
        date: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setHoliday((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3001/hr/holidays', holiday, {
                withCredentials: true,
            });
            alert('Holiday created successfully!');
            console.log('Response:', response.data);
            onClose();
        } catch (error) {
            console.error('Error creating lead:', error);
            alert('Failed to create lead. Please try again.');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4 text-center">Create New Holiday</h2>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">
                            Holiday Name
                        </label>
                        <input
                            type="text"
                            id="holidayName"
                            name="holidayName"
                            value={holiday.holidayName}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            placeholder="Enter Holiday Name"
                        />
                    </div>




                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                            Date
                        </label>
                        <input
                            type='date'
                            id="date"
                            name="date"
                            value={holiday.date}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
                        >
                        </input>
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

export default CreateHolidayModal;