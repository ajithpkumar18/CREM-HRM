import { SidebarItem } from "/home/user/CREM-HRM/src/components/ui/Sidebar/SideBarItem.tsx"

const items = [
    {
        activelogo: "/src/assets/dashboard/sidebar/dashboard_blue.svg",
        text: "Dashboard",
        inactivelogo: "/src/assets/dashboard/sidebar/dashboard.svg"
    },
    {
        activelogo: "/src/assets/dashboard/sidebar/allemployees_blue.svg",
        text: "All Employees",
        inactivelogo: "/src/assets/dashboard/sidebar/allemployees.svg"
    },
    {
        activelogo: "/src/assets/dashboard/sidebar/allleads_blue.svg",
        text: "All Leads",
        inactivelogo: "/src/assets/dashboard/sidebar/allleads.svg"
    },
    {
        activelogo: "/src/assets/dashboard/sidebar/attendance_blue.svg",
        text: "Attendance",
        inactivelogo: "/src/assets/dashboard/sidebar/attendance.svg"
    },
    {
        activelogo: "/src/assets/dashboard/sidebar/payroll_blue.svg",
        text: "Payroll",
        inactivelogo: "/src/assets/dashboard/sidebar/payroll.svg"
    },
    {
        activelogo: "/src/assets/dashboard/sidebar/jobs_blue.svg",
        text: "Jobs",
        inactivelogo: "/src/assets/dashboard/sidebar/jobs.svg"
    },
    {
        activelogo: "/src/assets/dashboard/sidebar/candidates_blue.svg",
        text: "Candidates",
        inactivelogo: "/src/assets/dashboard/sidebar/candidates.svg"
    },
    {
        activelogo: "/src/assets/dashboard/sidebar/leaves_blue.svg",
        text: "Leaves",
        inactivelogo: "/src/assets/dashboard/sidebar/leaves.svg"
    },
    {
        activelogo: "/src/assets/dashboard/sidebar/holidays_blue.svg",
        text: "Holidays",
        inactivelogo: "/src/assets/dashboard/sidebar/holidays.svg"
    },
    {
        activelogo: "/src/assets/dashboard/sidebar/setting_blue.svg",
        text: "Setting",
        inactivelogo: "/src/assets/dashboard/sidebar/setting.svg"
    }
]

const Sidebar = () => {
    return (<div className="top-0 left-0 w-96 ">
        <div className="m-4 rounded-xl border border-r-slate-200 bg-gray-200">
            <div className="flex p-6 items-center gap-3">
                <div className="text-purple-600">
                    <img src="/src/assets/Logo.svg" alt="" />
                </div>
                <p className="text-3xl font-bold tracking-wide">
                    HRMS
                </p>
            </div>
            <div className=" h-screen  p-6 items-center gap-3">
                {items.map((item) => (
                    <SidebarItem key={item.text} text={item.text} activeicon={item.activelogo as any} inactiveicon={item.inactivelogo as any} />
                ))}
            </div>
        </div>
    </div>
    )
}

export default Sidebar;