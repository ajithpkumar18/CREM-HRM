import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';

import user from "../../assets/user.png"
import { EmployeeVacationData, EmployeeLeaveSummary, EmployeeLeaveData } from '../../data/leaveData';

const getLeaveColor = (leaveType: string, status: string) => {
  if (status === 'Approved') { // Corrected status to uppercase 'Approved'
    switch (leaveType) {
      case 'Vacation': // Corrected leave type to uppercase 'Vacation'
        return 'bg-blue-500';
      case 'Sick Leave': // Corrected leave type to uppercase 'Sick Leave'
        return 'bg-red-500';
      case 'Work remotely': // Corrected leave type to uppercase 'Work remotely'
        return 'bg-green-500';
      default:
        return '';
    }
  } else {
    switch (leaveType) {
      case 'Vacation': // Corrected leave type to uppercase 'Vacation'
        return 'bg-blue-300';
      case 'Sick Leave': // Corrected leave type to uppercase 'Sick Leave'
        return 'bg-red-300';
      case 'Work remotely': // Corrected leave type to uppercase 'Work remotely'
        return 'bg-green-300';
      default:
        return '';
    }
  }
};

const generateCalendarDates = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: daysInMonth }, (_, i) => {
    const day = (i + 1).toString().padStart(2, '0');
    const monthPadded = (month + 1).toString().padStart(2, '0');
    return `${year}-${monthPadded}-${day}`;
  });
};

const Leaves: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vacations' | 'calendar'>('vacations');
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [calendarDates, setCalendarDates] = useState<string[]>(generateCalendarDates(currentMonth));

  // Use EmployeeLeaveSummary[] as the type for employeeLeaveData state
  const [employeeLeaveData] = useState<EmployeeLeaveSummary[]>(EmployeeLeaveData); // Initialize with imported data


  const handlePreviousMonth = () => {
    setCurrentMonth(prevMonth => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() - 1);
      return newMonth;
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth(prevMonth => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() + 1);
      return newMonth;
    });
  };

  useEffect(() => {
    setCalendarDates(generateCalendarDates(currentMonth));
  }, [currentMonth]);
  return (
    <>
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto px-6 py-8"> {/* Ensure consistent padding */}
          <div className="flex items-center justify-between mb-6">
            <div className="relative flex items-center">
              <BiSearch className="absolute ml-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex space-x-4 flex-wrap gap-2 justify-center">
              <button
                className={`px-4 py-2 rounded-md ${activeTab === 'vacations'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700'
                  }`}
                onClick={() => setActiveTab('vacations')}
              >
                Employees Vacations
              </button>
              <button
                className={`px-4 py-2 rounded-md ${activeTab === 'calendar'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700'
                  }`}
                onClick={() => setActiveTab('calendar')}
              >
                Calendar
              </button>
            </div>
          </div>

          {activeTab === 'vacations' && (
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
                      Vacations
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Sick leave
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Remote Work
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {employeeLeaveData.map((employee: EmployeeLeaveSummary) => ( // Use employeeLeaveData state
                    <tr key={employee.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center">
                        <img src={user} alt={employee.name} className="h-8 w-8 rounded-full mr-2" />
                        {employee.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {employee.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {"Design"} {/* Placeholder, replace with actual data if available */}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {"UI/UX Designer"} {/* Placeholder, replace with actual data if available */}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {employee.vacations}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {employee.sickLeave}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {employee.remoteWork}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table> {/* Corrected closing tag */}
            </div>
          )}

          {/* Calendar View */}
          {/* ... (rest of the calendar code) ... */}

          {activeTab === 'calendar' && (
            <div className="bg-white shadow rounded-lg overflow-hidden">
              {/* Month Navigation */}
              <div className="px-6 py-4 flex items-center justify-between">
                <button className="text-gray-500 hover:text-gray-700" onClick={handlePreviousMonth}>&larr;</button>
                <h3 className="text-lg font-medium text-gray-900">
                  {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} {/* Keep full month and year */}
                </h3>
                <button className="text-gray-500 hover:text-gray-700" onClick={handleNextMonth}>&rarr;</button>
              </div>
              {/* Calendar and Employee List Container */}
              <div className="flex overflow-hidden h-96 border-t border-gray-200">
                {/* Employee List - Fixed Header, Vertical Scrollable Body */}
                <div className="flex-shrink-0 w-48 overflow-y-auto border-r border-gray-200"> {/* Adjust width and added overflow-y-auto */}
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 sticky top-0"> {/* Added sticky for header */}
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Employees
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {EmployeeVacationData.map((employee) => ( // Use EmployeeVacationData from imported data
                        <tr key={employee.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center">
                            <img src={user} alt={employee.name} className="h-8 w-8 rounded-full mr-2" />
                            {employee.name}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Calendar Grid - Fixed Header, Horizontal and Vertical Scrollable Body */}
                <div className="flex-1 overflow-x-auto overflow-y-auto"> {/* Combined horizontal and vertical scroll */}
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 sticky top-0"> {/* Added sticky for header */}
                      <tr >
                        {calendarDates.map((date, index) => (
                          <th
                            key={index}
                            scope="col"
                            className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[50px]" // Increased min-width for date columns

                          >
                            {date.split('-')[2]}
                            <div className="text-xs text-gray-500">
                              {new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {EmployeeVacationData.map((employee) => ( // Use EmployeeVacationData from imported data
                        <tr key={employee.id} className="h-12"> {/* Added a fixed height to rows */}
                          {calendarDates.map((date, index) => {
                            const employeeLeave = EmployeeVacationData.find(item => item.id === employee.id && item.dates.includes(date));
                            return (
                              <td key={index} className="border-r border-gray-200 last:border-r-0 py-4"> {/* Adjusted vertical padding */}
                                {employeeLeave && ( // Conditionally render the colored block
                                  <div
                                    className={`w-full h-full rounded-md flex items-center justify-center ${ // Added rounded-md class and fixed height
                                      getLeaveColor(
                                        employeeLeave.leaveType,
                                        employeeLeave.status
                                      )}`} ></div>
                                )}


                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>

                </div>
              </div>
              {/* Leave Type Legend */}
              <div className="px-6 py-4 flex flex-wrap items-center justify-center text-xs gap-4">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span>Vacation Approved</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
                  <span>Vacation Pending</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span>Sick Leave Approved</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-red-300 rounded-full"></span>
                  <span>Sick Leave Pending</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span>Work remotely Approved</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-green-300 rounded-full"></span>
                  <span>Work remotely Pending</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Leaves;