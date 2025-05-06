import AttendanceOverview from "../../components/ui/Dashboard/AttendanceOverview";
import CompanyOverview from "../../components/ui/Dashboard/CompanyOverview";
import Employees from "../../components/ui/Dashboard/Employees";
import TeamPerformance from "../../components/ui/Dashboard/TeamPerformance";
import Navbar from "../../components/ui/Navbar";
import Sidebar from "../../components/ui/Sidebar/Sidebar";
import React from 'react'

export default function Dashboard() {
    return (
        <div className="flex">
            <Sidebar className="w-[280px]"/>
            <div className="w-full p-6">
                <Navbar />
                {/* Main Content Container */}
                <div className="flex flex-col gap-6">
                    {/* Top Row: Hello, Search, Notifications, Profile */}
                    
                    {/* Second Row: CompanyOverview and TeamPerformance */}
                    <div className="flex gap-6">
                        {/* Company Overview Cards */}
                        <div className="w-[60%]">
                            <CompanyOverview />
                        </div>
                        {/* Team Performance Chart */}
                        <div className="flex-1">
                            <TeamPerformance />
                        </div>
                    </div>
                
                {/* Bottom Section: Employees and AttendanceOverview */}
                <div className="flex gap-6">
                  {/* Employees Table */}
                  <div className="w-[60%]">
                    <Employees />
                  </div>
                   {/* Attendance Overview Chart */}
                  <div className="w-[365px] h-[433px]">
                    <AttendanceOverview  />
                  </div>
                
              </div>
            </div>
            </div>
        </div>
    )
}

