import React from 'react';

interface CreateLeadModalProps {
  onClose: () => void;
}

const CreateLeadModal: React.FC<CreateLeadModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
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
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter Client Id"
            />
          </div>
          <div>
            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="text"
              id="contactNumber"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter Your Date"
            />
          </div>
          <div>
            <label htmlFor="marketNiche" className="block text-sm font-medium text-gray-700">
              Market Niche
            </label>
            <input
              type="text"
              id="marketNiche"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter Client Id"
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700">
              Service
            </label>
            <input
              type="text"
              id="service"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter Client Id"
            />
          </div>
          <div>
            <label htmlFor="assignedTo" className="block text-sm font-medium text-gray-700">
              Assigned To
            </label>
            <select
              id="assignedTo"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
            >   
              <option value="">Select...</option>
              {/* Add options here */}
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