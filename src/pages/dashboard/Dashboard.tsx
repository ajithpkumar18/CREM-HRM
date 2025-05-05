import PieCharts from "../../components/ui/Common/PieCharts";
import CompanyOverview from "../../components/ui/Dashboard/CompanyOverview";
import Employees from "../../components/ui/Dashboard/Employees";
import TeamPerformance from "../../components/ui/Dashboard/TeamPerformance";
import Navbar from "../../components/ui/Navbar";
import Sidebar from "../../components/ui/Sidebar/Sidebar";

export default function Dashboard() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full">
              <Navbar />
              <div className="p-6">
                <div className="flex gap-6 mb-6">
                  <div className="flex gap-6">
                    <CompanyOverview />
                  </div>
                  <div className="w-full">
                    <TeamPerformance />
                  </div>
                </div>
                <div className="flex gap-6">
                  <Employees />
                  <PieCharts />
                </div>
              </div>
            </div>
        </div>
    )
}
