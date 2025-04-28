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
                <div className="flex w-full border rounded-xl h-[345px] justify-evenly px-7 gap-30 mb-5">
                    <CompanyOverview />
                    <TeamPerformance />
                </div>
                <div>
                    <Employees />
                </div>
            </div>
        </div>
    )
}
