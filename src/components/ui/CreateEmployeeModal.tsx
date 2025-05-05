import React from 'react';

interface CreateEmployeeModalProps {
  onClose: () => void;
}

const CreateEmployeeModal: React.FC<CreateEmployeeModalProps> = ({ onClose }) => {
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={onClose} // Close when clicking outside
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col gap-6"
        onClick={handleModalClick} // Prevent closing when clicking inside modal
      >
        <h2 className="text-xl font-semibold text-center">Create New Employee</h2>
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter Client Id"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Joining</label>
            <input
              type="date"
              placeholder="Enter Your Date"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Employee ID</label>
            <input
              type="text"
              placeholder="Enter Client Id"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter Client Id"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-purple-primary-500 text-white rounded-md hover:bg-purple-600"
          >
            Invite
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployeeModal;