import React from 'react';

interface AddHolidayModalProps {
  onClose: () => void;
}

const AddHolidayModal: React.FC<AddHolidayModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" onClick={(e) => e.stopPropagation()}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-96" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-semibold mb-4 text-center">Add New Holiday</h2>
        <div className="mb-4">
          <label htmlFor="holidayName" className="block text-sm font-medium text-gray-700">Holiday Name</label>
          <input
            type="text"
            id="holidayName"
            placeholder="Holiday Name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        <div className="mb-6">
          <label htmlFor="selectDate" className="block text-sm font-medium text-gray-700">Select Date</label>
          <input
            type="date"
            id="selectDate"
            placeholder="Select Date"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md shadow-sm hover:bg-purple-700"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddHolidayModal;