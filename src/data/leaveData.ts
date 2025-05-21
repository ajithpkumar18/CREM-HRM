export interface EmployeeVacation {
  id: number;
  name: string;
  dates: string[];
  leaveType: 'Vacation' | 'Sick Leave' | 'Work remotely';
  status: 'Approved' | 'Pending';
}

export const EmployeeVacationData: EmployeeVacation[] = [
  {
    id: 1,
    name: 'Oscar Holloway',
    dates: ['2023-05-10', '2023-05-11', '2023-05-12'],
    leaveType: 'Vacation',
    status: 'Approved',
  },
  {
    id: 2,
    name: 'Evan Yates',
    dates: ['2023-05-15', '2023-05-16'],
    leaveType: 'Sick Leave',
    status: 'Pending',
  },
  {
    id: 3,
    name: 'Lola Zimmerman',
    dates: ['2023-05-20', '2023-05-21', '2023-05-22', '2023-05-23', '2023-05-24'],
    leaveType: 'Work remotely',
    status: 'Approved',
  },
   {
    id: 4,
    name: 'Tyler Curry',
    dates: ['2023-05-05', '2023-05-06', '2023-05-07'],
    leaveType: 'Vacation',
    status: 'Approved',
  },
  {
    id: 5,
    name: 'Sadie Wolfe',
    dates: ['2023-05-18', '2023-05-19'],
    leaveType: 'Sick Leave',
    status: 'Approved',
  },
   {
    id: 6,
    name: 'Sean Gibbs',
    dates: ['2023-05-10', '2023-05-11', '2023-05-12'],
    leaveType: 'Work remotely',
    status: 'Approved',
  },
  {
    id: 7,
    name: 'Corey Watts',
    dates: ['2023-05-25', '2023-05-26', '2023-05-27', '2023-05-28'],
    leaveType: 'Vacation',
    status: 'Pending',
  },
  {
    id: 8,
    name: 'Theodore Shaw',
    dates: ['2023-05-02', '2023-05-03'],
    leaveType: 'Sick Leave',
    status: 'Pending',
  },
  {
    id: 9,
    name: 'Edwin Austin',
    dates: ['2023-05-14', '2023-05-15', '2023-05-16'],
    leaveType: 'Work remotely',
    status: 'Pending',
  },
  {
    id: 10,
    name: 'Thomas Cummings',
    dates: ['2023-05-29', '2023-05-30'],
    leaveType: 'Vacation',
    status: 'Approved',
  },
   {
    id: 11,
    name: 'Augusta Gordon',
    dates: ['2023-05-08', '2023-05-09'],
    leaveType: 'Sick Leave',
    status: 'Approved',
  },
  // Dummy data for May 2025
  {
    id: 15,
    name: 'John Doe',
    dates: ['2025-05-01', '2025-05-02', '2025-05-03'],
    leaveType: 'Vacation',
    status: 'Approved',
  },
  {
    id: 16,
    name: 'Jane Smith',
    dates: ['2025-05-10', '2025-05-11', '2025-05-12'],
    leaveType: 'Sick Leave',
    status: 'Pending',
  },
   {
    id: 17,
    name: 'Peter Jones',
    dates: ['2025-05-18', '2025-05-19', '2025-05-20', '2025-05-21'],
    leaveType: 'Work remotely',
    status: 'Approved',
  },
   {
    id: 18,
    name: 'Mary Brown',
    dates: ['2025-05-25', '2025-05-26'],
    leaveType: 'Vacation',
    status: 'Pending',
  },
];

export interface EmployeeLeaveSummary {
  id: number;
  name: string;
  vacations: number;
  sickLeave: number;
  remoteWork: number;
}

export const EmployeeLeaveData: EmployeeLeaveSummary[] = [
  {
    id: 1,
    name: 'Oscar Holloway',
    vacations: 5,
    sickLeave: 2,
    remoteWork: 1,
  },
  {
    id: 2,
    name: 'Evan Yates',
    vacations: 3,
    sickLeave: 0,
    remoteWork: 2,
  },
  {
    id: 3,
    name: 'Lola Zimmerman',
    vacations: 8,
    sickLeave: 1,
    remoteWork: 5,
  },
  {
    id: 4,
    name: 'Tyler Curry',
    vacations: 2,
    sickLeave: 3,
    remoteWork: 0,
  },
];