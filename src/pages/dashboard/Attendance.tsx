import AttendTable from "../../components/ui/Attendance/AttendTable";
import Navbar from "../../components/ui/Navbar";
import Sidebar from "../../components/ui/Sidebar/Sidebar";

export default function Attendance() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full">
                <Navbar />
                <div className="w-12/12 mr-7 h-full rounded-[10px] p-[22px] flex flex-col gap-[22px]">
                    <div className="w-full flex justify-between ">
                        <div className="flex items-center px-3 border rounded-[10px] w-4/12 my-auto h-[50px] gap-[10px]">
                            <img className="w-6 h-6" src="/src/assets/dashboard/Navbar/search.svg" alt="" />
                            <input className="w-full outline-none" type="text" placeholder="Search" />
                        </div>
                        <div className="flex w-5/12 justify-around h-[50px] gap-5">
                            <div className="cursor-pointer bg-purple-primary-500 rounded-[10px] text-white flex gap-[10px] p-5 h-25 w-[220px] items-center ">
                                <img className="h-6 w-6" src="/src/assets/plus.svg" alt="" />
                                <p className="font-light text-[16px] leading-[24px] ">Add New Lead</p>
                            </div>
                            <div className="cursor-pointer border bg-white rounded-[10px] text-black flex gap-[10px] p-5 h-25 w-[180px] items-center ">
                                <img className="h-6 w-6" src="/src/assets/plus.svg" alt="" />
                                <p className="font-light text-[16px] leading-[24px] ">Upload Bulk</p>
                            </div>
                            <div className="cursor-pointer border rounded-[10px]  flex gap-[10px] justify-center py-2 h-25 w-[60px] items-center">
                                <img className="w-6 h-6" src="/src/assets/filter.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <AttendTable headings={["Employee Name", "Designation", "Type", "Check In Time", "Status"]} />
                    </div>
                </div>
            </div>
        </div>
    )
}
