import { useLocation, useNavigate } from "react-router";
import { SidebarItem } from "./SideBarItem";
import axios from "axios";
import AddBreak from "../AddBreak";

const items = [
    {
        activelogo: "/src/assets/dashboard/sidebar/dashboard_blue.svg",
        text: "Dashboard",
        inactivelogo: "/src/assets/dashboard/sidebar/dashboard.svg",
        path: "/dashboard",
    },
    {
        activelogo: "/src/assets/dashboard/sidebar/allemployees_blue.svg",
        text: "All Employees",
        inactivelogo: "/src/assets/dashboard/sidebar/allemployees.svg",
        path: "/employees",
    },
    {
        activelogo: "/src/assets/dashboard/sidebar/allleads_blue.svg",
        text: "All Leads",
        inactivelogo: "/src/assets/dashboard/sidebar/allleads.svg",
        path: "/leads",
    },
    {
        activelogo: "/src/assets/dashboard/sidebar/attendance_blue.svg",
        text: "Attendance",
        inactivelogo: "/src/assets/dashboard/sidebar/attendance.svg",
        path: "/attendance",
    },
    {
        activelogo: "/src/assets/dashboard/sidebar/payroll_blue.svg",
        text: "Payroll",
        inactivelogo: "/src/assets/dashboard/sidebar/payroll.svg",
        path: "/payroll",
    },
    {
        activelogo: "/src/assets/dashboard/sidebar/jobs_blue.svg",
        text: "Jobs",
        inactivelogo: "/src/assets/dashboard/sidebar/jobs.svg",
        path: "/jobs",
    },
    {
        activelogo: "/src/assets/dashboard/sidebar/candidates_blue.svg",
        text: "Candidates",
        inactivelogo: "/src/assets/dashboard/sidebar/candidates.svg",
        path: "/candidates",
    },
    {
        activelogo: "/src/assets/dashboard/sidebar/leaves_purple.svg",
        text: "Leaves",
        inactivelogo: "/src/assets/dashboard/sidebar/leaves.svg",
        path: "/leaves",
    },
    {
        activelogo: "/src/assets/dashboard/sidebar/holidays_blue.svg",
        text: "Holidays",
        inactivelogo: "/src/assets/dashboard/sidebar/holidays.svg",
        path: "/holidays",
    },
    {
        activelogo: "/src/assets/dashboard/sidebar/setting_blue.svg",
        text: "Setting",
        inactivelogo: "/src/assets/dashboard/sidebar/setting.svg",
        path: "/setting",
    }
];

interface SidebarProps {
    className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClockIn = async () => {
        try {
            const response = await axios.post(
                "http://localhost:3001/hr/attendance/clockin",
                {
                    status: "Present"
                },
                { withCredentials: true }
            );
            alert("Clocked in successfully!");
            console.log("Clock In Response:", response.data);
        } catch (err: any) {
            console.error("Error during clock in:", err);
            alert(err.response?.data?.message || "Failed to clock in");
        }
    };

    const handleClockOut = async () => {
        try {
            const response = await axios.post(
                "http://localhost:3001/hr/attendance/clockout",
                {},
                { withCredentials: true }
            );
            alert("Clocked out successfully!");
            console.log("Clock Out Response:", response.data);
        } catch (err: any) {
            console.error("Error during clock out:", err);
            alert(err.response?.data?.message || "Failed to clock out");
        }
    };

    const handleLogout = async () => {
        try {
            await axios.post(
                "http://localhost:3001/hr/logout",
                {},
                { withCredentials: true }
            );
            alert("Logged out successfully!");
            // Clear any local storage or session data if necessary
            localStorage.removeItem("authToken");
            // Redirect to the login page
            navigate("/login");
        } catch (err: any) {
            console.error("Error during logout:", err);
            alert(err.response?.data?.message || "Failed to log out");
        }
    };

    return (
        <div className={`top-0 left-0 w-96 ${className || ""}`}>
            <div className="m-4 rounded-xl border border-r-slate-200 bg-gray-200">
                <div className="flex p-6 items-center gap-3">
                    <div className="text-purple-600">
                        <img src="/src/assets/Logo.svg" alt="" />
                    </div>
                    <p className="text-3xl font-bold tracking-wide">HRMS</p>
                </div>
                <div className="h-screen p-6 items-center gap-3">
                    {items.map((item) => (
                        <SidebarItem
                            key={item.text}
                            text={item.text}
                            activeicon={item.activelogo}
                            inactiveicon={item.inactivelogo}
                            path={item.path}
                        />
                    ))}
                    <div
                        className={`flex w-full items-center border-l-2  text-gray-500 px-5 py-2 mb-4 gap-4 hover:bg-gray-200  cursor-pointer`}
                        onClick={handleLogout}
                    >

                        <span>
                            <img src="/src/assets/dashboard/sidebar/setting.svg" alt="" />
                        </span>
                        <span className={`text-md active:text-purple-primary-500`}>Logout</span>
                    </div>
                    <div className="flex w-full items-center justify-evenly mt-10">
                        <button
                            onClick={handleClockIn}
                            className="btn bg-black px-4 py-3 rounded-lg text-white"
                        >
                            Clock in
                        </button>
                        <button
                            onClick={handleClockOut}
                            className="btn bg-purple-primary-500 px-4 py-3 rounded-lg text-white"
                        >
                            Clock Out
                        </button>
                    </div>
                </div>
                <div className="bg-custom-grey-200 flex justify-center items-center">
                    <AddBreak />
                </div>
            </div>
        </div>
    );
}