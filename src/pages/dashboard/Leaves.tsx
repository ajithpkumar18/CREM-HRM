import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import axios from 'axios';

import user from "../../assets/user.png";
import AddleavesModal from '../../components/ui/Modals/AddLeaveModal';
import { getDateOnly } from '../../components/addons/DateMesc';

interface Leave {
  _id: string;
  leaveType: string;
  startDate: string;
  endDate: string;
  reason: string;
  status: string;
  appliedOn: string;
  companyID: string;
  userDetails: {
    email: string;
    role: string;
    fullName: string;
    designation: string;
  };
}

const Leaves: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [leaves, setLeaves] = useState<Leave[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLeaves, setFilteredLeaves] = useState<Leave[]>([]);

  const handleClose = () => {
    setOpen(false);
  };

  const fetchLeaves = async () => {
    try {
      const response = await axios.get("http://localhost:3001/hr/leaves", {
        withCredentials: true,
      });
      setLeaves(response.data.data);
      setFilteredLeaves(response.data.data);
    } catch (error) {
      console.error("Error fetching leave data:", error);
    }
  };

  useEffect(() => {
    fetchLeaves();
  }, []);


  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredLeaves(leaves);
    } else {
      const filtered = leaves.filter((leave) =>
        leave.userDetails.fullName.toLowerCase().includes(query.toLowerCase()) ||
        leave.companyID.toLowerCase().includes(query.toLowerCase()) ||
        leave.leaveType.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredLeaves(filtered);
    }
  };

  return (
    <div>
      <div className="flex-1 relative overflow-x-hidden overflow-y-auto mt-10">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="relative flex items-center gap-3">
              <BiSearch className="absolute ml-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, ID, or leave type"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 pr-24 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                onClick={() => handleSearch(searchQuery)}
              >
                Search
              </button>
            </div>
            <div className="flex space-x-4 flex-wrap gap-2 justify-center">
              <button
                className="px-10 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                onClick={() => setOpen(true)}
              >
                Add Leave
              </button>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Employee Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Employee ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Department
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Designation
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Start Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Leave Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    End Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredLeaves.map((leave) => (
                  <tr key={leave._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center">
                      <img src={user} alt={leave.userDetails.fullName} className="h-8 w-8 rounded-full mr-2" />
                      {leave.userDetails.fullName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {leave.companyID}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {leave.reason}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {leave.userDetails.designation}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {getDateOnly(leave.startDate)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {leave.leaveType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {getDateOnly(leave.endDate)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
              <div className="relative w-full max-w-2xl p-4">
                <AddleavesModal onClose={handleClose} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Leaves;