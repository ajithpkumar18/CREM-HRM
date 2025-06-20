import { useState, useEffect } from "react";
import axios from "axios";
import AttendTable from "../../components/ui/Attendance/AttendTable";
import EditCheckInModal from "../../components/ui/Attendance/EditCheckInModal";
import { Employee } from "../../data/atom";



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
                withCredentials: true,
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
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCheckInTime(null);
        setSelectedTimeIndex(null);
    };

    const handleEditCheckIn = async (newTime: string) => {
        if (selectedTimeIndex !== null) {
            try {

                const response = await axios.put(
                    `http://localhost:3001/hr/attendance/update`,
                    {
                        date,
                        checkInTime: newTime,
                        employeeId: employee[selectedTimeIndex].userDetails.email,
                    },
                    { withCredentials: true }
                );

                console.log("Updated attendance data:", response.data);

                setEmployee((prevEmployee) => {
                    const updatedEmployee = [...prevEmployee];
                    updatedEmployee[selectedTimeIndex].checkInTime = newTime;
                    return updatedEmployee;
                });

                alert("Check-in time updated successfully!");
            } catch (err: any) {
                console.error("Error updating check-in time:", err);
                alert(err.response?.data?.message || "Failed to update check-in time");
            }
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

            <div className="w-full h-full rounded-[10px] flex flex-col gap-6 mt-5">

                <div className="w-full flex flex-wrap justify-between items-center gap-4">

                    <div className="flex items-center px-4 border rounded-[10px] w-full md:w-6/12 h-[50px] gap-3 bg-white">
                        <img className="w-6 h-6" src="/src/assets/dashboard/Navbar/search.svg" alt="Search Icon" />
                        <input
                            className="w-full outline-none text-sm"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-center items-center h-[50px] w-[60px] border rounded-[10px] bg-white cursor-pointer">
                        <img className="w-6 h-6" src="/src/assets/filter.svg" alt="Filter Icon" />
                    </div>
                </div>

                <div className="w-full h-full border rounded-lg flex flex-col gap-6 bg-white shadow-md">
                    {loading ? (
                        <p>Loading attendance data...</p>
                    ) : error ? (
                        <p style={{ color: "red" }}>{error}</p>
                    ) : (
                        <AttendTable
                            headings={["Employee Name", "Designation", "Type", "Check In Time", "Check Out Time", "Status"]}
                            onEditClick={handleOpenModal}
                            employee={employee}
                        />
                    )}
                </div>
            </div>
        </>
    );
}