import PieCharts from "../../components/ui/Common/PieCharts";
import CompanyOverview from "../../components/ui/Dashboard/CompanyOverview";
import Employees from "../../components/ui/Dashboard/Employees";
import TeamPerformance from "../../components/ui/Dashboard/TeamPerformance";
import Navbar from "../../components/ui/Navbar";
import { Sidebar } from "../../components/ui/Sidebar/Sidebar";

export default function Dashboard() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full">
                <Navbar />
                <div className="flex border rounded-xl h-[345px] justify-evenly px-7 gap-30 mb-5 mr-7">
                    <CompanyOverview />
                    <TeamPerformance />
                </div>
                <div className="flex gap-6 w-full">
                    <Employees />
                    <PieCharts />
                </div>
            </div>
        </div>
    )
}
