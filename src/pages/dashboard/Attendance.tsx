import { useState, useEffect } from "react";
import axios from "axios";
import AttendTable from "../../components/ui/Attendance/AttendTable";
import EditCheckInModal from "../../components/ui/Attendance/EditCheckInModal";


interface Employee {
    checkInTime: string;
    date: string;
    status: string;
    userDetails: {
        username: string;
        email: string;
    }
}

export default function Attendance() {
    const [showModal, setShowModal] = useState(false);
    const [selectedCheckInTime, setSelectedCheckInTime] = useState<string | null>(null);
    const [selectedTimeIndex, setSelectedTimeIndex] = useState<number | null>(null);
    const [employee, setEmployee] = useState<Employee[]>([]);
    const [date, setDate] = useState<string>(new Date().toISOString().split("T")[0]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);


    const fetchAttendance = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`http://localhost:3001/hr/attendance/daily`, {
                params: { date },
                withCredentials: true
            });

            console.log("Fetched attendance data:", response.data.attendanceRecords);
            setEmployee(response.data.attendanceRecords);
        } catch (err: any) {
            console.error("Error fetching attendance data:", err);
            setError(err.response?.data?.message || "Error fetching attendance data");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAttendance();
    }, [date]);

    const handleOpenModal = (time: string) => {
        setSelectedCheckInTime(time);
        setSelectedTimeIndex(null);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCheckInTime(null);
        setSelectedTimeIndex(null);
    };

    const handleEditCheckIn = (newTime: string) => {
        if (selectedTimeIndex !== null) {
            setEmployee((prevEmployee) => {
                const updatedEmployee = [...prevEmployee];
                updatedEmployee[selectedTimeIndex].checkInTime = newTime;
                return updatedEmployee;
            });
        }
        handleCloseModal();
    };

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center">
                    <EditCheckInModal
                        checkInTime={selectedCheckInTime || ""}
                        onClose={handleCloseModal}
                        onConfirm={handleEditCheckIn}
                        index={selectedTimeIndex}
                    />
                </div>
            )}

            <div className="w-12/12 mr-7 h-full rounded-[10px] p-[22px] flex flex-col gap-[22px]">
                <div className="w-full flex justify-between">
                    <div className="flex items-center px-3 border rounded-[10px] w-8/12 my-auto h-[50px] gap-[10px]">
                        <img className="w-6 h-6" src="/src/assets/dashboard/Navbar/search.svg" alt="" />
                        <input
                            className="w-full outline-none"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-around h-[50px] gap-5">
                        <div className="cursor-pointer border rounded-[10px] flex gap-[10px] justify-center py-2 h-25 w-[60px] items-center">
                            <img className="w-6 h-6" src="/src/assets/filter.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    {loading ? (
                        <p>Loading attendance data...</p>
                    ) : error ? (
                        <p style={{ color: "red" }}>{error}</p>
                    ) : (
                        <AttendTable
                            headings={["Employee Name", "Designation", "Type", "Check In Time", "Status"]}
                            onEditClick={handleOpenModal}
                            employee={employee}
                        />
                    )}
                </div>
            </div>
        </>
    );
}