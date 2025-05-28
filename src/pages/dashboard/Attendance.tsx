import { useState } from "react";
import AttendTable from "../../components/ui/Attendance/AttendTable";
import EditCheckInModal from "../../components/ui/Attendance/EditCheckInModal";
import Navbar from "../../components/ui/Navbar";
import Sidebar from "../../components/ui/Sidebar/Sidebar";

interface Employee {
    src: string;
    name: string;
    time: string;
    department: string;
    desgn: string;
    type: string;
    status: string;
}

export default function Attendance() {
    const [showModal, setShowModal] = useState(false);
    const [selectedCheckInTime, setSelectedCheckInTime] = useState<string | null>(null);
    const [selectedTimeIndex, setSelectedTimeIndex] = useState<number | null>(null);
    const [employee, setEmployee] = useState<Employee[]>([
        {
            src: "/noavatar.png", name: "John Doe", time: "09:30 AM", department: "Development", desgn: "Team Lead - Design", type: "Office", status: "Late"
        },
        { src: "/noavatar.png", name: "John Doe", time: "09:30 AM", department: "Development", desgn: "Team Lead - Design", type: "Office", status: "Late" },
        { src: "/noavatar.png", name: "John Doe", time: "09:30 AM", department: "Development", desgn: "Team Lead - Design", type: "Office", status: "on time" },
        { src: "/noavatar.png", name: "John Doe", time: "09:30 AM", department: "Development", desgn: "Team Lead - Design", type: "Office", status: "Late" },
        { src: "/noavatar.png", name: "John Doe", time: "09:30 AM", department: "Development", desgn: "Team Lead - Design", type: "Office", status: "Late" },
        { src: "/noavatar.png", name: "John Doe", time: "09:30 AM", department: "Development", desgn: "Team Lead - Design", type: "Office", status: "Late" },
        { src: "/noavatar.png", name: "John Doe", time: "09:30 AM", department: "Development", desgn: "Team Lead - Design", type: "Office", status: "on time" },
        { src: "/noavatar.png", name: "John Doe", time: "09:30 AM", department: "Development", desgn: "Team Lead - Design", type: "Office", status: "Late" },
        { src: "/noavatar.png", name: "John Doe", time: "09:30 AM", department: "Development", desgn: "Team Lead - Design", type: "Office", status: "Late" },
        { src: "/noavatar.png", name: "John Doe", time: "09:30 AM", department: "Development", desgn: "Team Lead - Design", type: "Office", status: "Late" },
        { src: "/noavatar.png", name: "John Doe", time: "09:30 AM", department: "Development", desgn: "Team Lead - Design", type: "Office", status: "on time" },
        { src: "/noavatar.png", name: "John Doe", time: "09:30 AM", department: "Development", desgn: "Team Lead - Design", type: "Office", status: "Late" },
        { src: "/noavatar.png", name: "John Doe", time: "09:30 AM", department: "Development", desgn: "Team Lead - Design", type: "Office", status: "Late" }
    ]);

    const handleOpenModal = (time: string, index: number) => {
        setSelectedCheckInTime(time);
        setSelectedTimeIndex(index);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCheckInTime(null);
    };
    const handleEditCheckIn = (newTime: string, index: number) => {

        setEmployee((prevEmployee) => {
            const updatedEmployee = [...prevEmployee];
            updatedEmployee[index].time = newTime;
            return updatedEmployee;
        });
        handleCloseModal()
    }
    return (
        <div className="flex">
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center" >
                    <EditCheckInModal checkInTime={selectedCheckInTime} onClose={handleCloseModal} onConfirm={handleEditCheckIn} index={selectedTimeIndex} />
                </div>
            )}
            <Sidebar />
            <div className="w-full">
                <Navbar />
                <div className="w-12/12 mr-7 h-full rounded-[10px] p-[22px] flex flex-col gap-[22px]">
                    <div className="w-full flex justify-between ">
                        <div className="flex items-center px-3 border rounded-[10px] w-8/12 my-auto h-[50px] gap-[10px]">
                            <img className="w-6 h-6" src="/src/assets/dashboard/Navbar/search.svg" alt="" />
                            <input className="w-full outline-none" type="text" placeholder="Search" />
                        </div>
                        <div className="flex  justify-around h-[50px] gap-5">
                            <div className="cursor-pointer border rounded-[10px]  flex gap-[10px] justify-center py-2 h-25 w-[60px] items-center">
                                <img className="w-6 h-6" src="/src/assets/filter.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <AttendTable headings={["Employee Name", "Designation", "Type", "Check In Time", "Status"]} onEditClick={handleOpenModal} employee={employee} />
                    </div>
                </div>
            </div>
        </div>
    )
}
