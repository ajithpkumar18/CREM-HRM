import { useEffect, useState } from "react";
import AddEmployeeModal from "../../components/ui/Modals/AddEmployeeModal";
import axios from "axios";
import { useRecoilState } from "recoil";
import { allEmployees } from "../../data/atom";
import Dropdown from "../../components/ui/Common/Dropdown";
import Pagination from "../../components/ui/Common/Pagination";

export default function AllEmployees() {
    const [showModal, setShowModal] = useState(false);
    const [query, setQuery] = useState('');
    const [employees, setEmployees] = useRecoilState(allEmployees);
    const headings = ["Employee Name", "Employee ID", "Department", "Designation", "Type", "Status", "Action"]
    const handleSearch = async () => {
        console.log(query)
        try {
            const response = await axios.get(`http://localhost:3001/hr/employee/search?q=${query}`,
                { withCredentials: true }
            );
            setEmployees(response.data.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching results:', error);
        }
    };

    const handleOpenModal = () => {
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get("http://localhost:3001/hr/employees", {
                    withCredentials: true,
                });
                console.log("Fetched employees:", response.data);
                setEmployees(response.data);
            } catch (error) {
                console.error("Error fetching employees:", error);
            }
        };

        fetchEmployees();
    }, [setEmployees]);


    const handleDelete = async (id: string) => {
        const confirmDelete = confirm("Are you sure you want to delete this employee?");
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:3001/hr/employee/${id}`, {
                    withCredentials: true,
                });
                setEmployees((prev) => prev.filter((emp) => emp.userId !== id));
                alert("Employee deleted successfully");
            } catch (error) {
                console.error("Error deleting employee:", error);
                alert("Failed to delete employee");
            }
        }
    };
    return (
        <>
            <div className="w-12/12 mr-7 h-full rounded-[10px] p-[22px] flex flex-col gap-[22px]">
                <div className="w-full flex justify-between ">
                    <div className="flex items-center px-3 border rounded-[10px] w-4/12 my-auto h-[50px] gap-[10px]">
                        <img className="w-6 h-6" src="/src/assets/dashboard/Navbar/search.svg" alt="" />
                        <input className="w-full outline-none" type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Enter name or company ID"
                            style={{ padding: '8px', width: '300px' }} />
                    </div>
                    <button onClick={handleSearch} className="bg-purple-primary-500 w-44 rounded-lg text-white">
                        Search
                    </button>
                    <div className="flex w-4/12 justify-around h-[50px] gap-5">
                        <div className="cursor-pointer bg-purple-primary-500 rounded-[10px] text-white flex gap-[10px] p-5 h-25 w-[220px] items-center ">
                            <img className="h-6 w-6" src="/src/assets/plus.svg" alt="" />
                            <button onClick={() => handleOpenModal()} className="font-light text-[16px] leading-[24px] ">Add New Employee</button>
                        </div>
                        <div className="cursor-pointer border rounded-[10px]  flex gap-[10px] p-5 h-25 w-[112px] items-center">
                            <img className="w-6 h-6" src="/src/assets/filter.svg" alt="" />
                            <p className="font-light text-[16px] leading-[24px] text-dark-500">Filter</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full h-full border rounded-lg p-5 flex flex-col gap-5 items-center justify-center">
                        <table className="h-[422px] w-fit mx-auto my-0">
                            <thead>
                                <tr className="border-b-[1px] border-gray-100 h-11 w-full">
                                    {headings.map((head, index) => (
                                        <td
                                            key={index}
                                            className="h-11 font-normal w-1/12 text-[16px] leading-[24px] text-nav-gray-500 px-4"
                                        >
                                            {head}
                                        </td>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="h-full">
                                {employees.map((emp) => (
                                    <tr key={emp.userId} className="h-14 w-full">
                                        <td className="max-h-11 w-1/12 border-b-[1px] border-gray-100 px-4">
                                            <div className="flex items-center gap-3">
                                                <p className="font-normal text-[16px] leading-[24px] text-dark-500">
                                                    {emp.fullName}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="h-11 border-b-[1px] w-1/12 border-gray-100 px-4">
                                            <p className="font-normal w-3/4 py-1 text-[14px] leading-[18px]">{emp.companyID}</p>
                                        </td>
                                        <td className="h-11 border-b-[1px] w-1/12 border-gray-100 px-4">
                                            <p className="font-normal w-3/4 py-1 text-[14px] leading-[18px]">{emp.team}</p>
                                        </td>
                                        <td className="border-b-[1px] w-1/12 border-gray-100 h-11 font-normal text-[16px] leading-[24px] text-dark-500 px-4">
                                            <span>{emp.designation}</span>
                                        </td>
                                        <td className="border-b-[1px] w-1/12 border-gray-100 h-11 font-normal text-[16px] leading-[24px] text-dark-500 px-4">
                                            {emp.empType}
                                        </td>
                                        <td className="h-11 border-b-[1px] w-1/12 border-gray-100 px-4">
                                            <p className="font-normal w-3/4 py-1 text-[14px] leading-[18px] text-purple-primary-500 bg-purple-primary-100 rounded-md text-center px-2">
                                                {emp.empRole}
                                            </p>
                                        </td>
                                        <td className="max-h-11 w-1/12 border-b-[1px] border-gray-100 px-4">
                                            <div className="flex items-center gap-5">
                                                <img className="w-6 h-6 cursor-pointer" src="/src/assets/eyes.svg" alt="View" />
                                                <img
                                                    className="w-6 h-6 cursor-pointer"
                                                    onClick={() => handleDelete(emp.userId)}
                                                    src="/src/assets/dustbin.svg"
                                                    alt="Delete"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex gap-2 items-center justify-between">
                            <div className="flex items-center gap-2">
                                <p>Showing</p>
                                <Dropdown start="10" />
                            </div>
                            <div className="w-8/12">
                                <Pagination />
                            </div>
                        </div>
                    </div></div>
                {showModal && <AddEmployeeModal onClose={handleCloseModal} />}
            </div>
        </>
    )
}
