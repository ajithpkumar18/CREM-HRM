import React, { useState, useEffect } from 'react';

interface EditCheckInModalProps {
  onClose: () => void;
  onConfirm: (editedTime: string) => void;
  checkInTime: string;
}

const EditCheckInModal: React.FC<EditCheckInModalProps> = ({ onClose, onConfirm, checkInTime }) => {
  const [editedTime, setEditedTime] = useState(checkInTime);

  useEffect(() => {
    setEditedTime(checkInTime);
  }, [checkInTime]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTime(e.target.value);
  };

  const handleConfirmClick = () => {
    onConfirm(editedTime);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center gap-4">
        <h2 className="text-xl font-bold">Edit Check-in Time</h2>
        <input
          type="text"
          value={editedTime}
          onChange={handleInputChange}
          className="border rounded px-3 py-2 w-full"
        />
        <div className="flex justify-end gap-4 w-full">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Close
          </button>
          <button
            onClick={handleConfirmClick}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCheckInModal;