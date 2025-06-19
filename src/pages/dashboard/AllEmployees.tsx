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
            <div className="w-full h-full rounded-[10px] flex flex-col gap-6">

                <div className="w-full flex flex-wrap justify-between items-center gap-4">

                    <div className="flex items-center px-4 border rounded-[10px] w-full md:w-4/12 h-[50px] gap-3">
                        <img className="w-6 h-6" src="/src/assets/dashboard/Navbar/search.svg" alt="Search Icon" />
                        <input
                            className="w-full outline-none text-sm"
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Enter name or company ID"
                        />
                    </div>

                    <button
                        onClick={handleSearch}
                        className="bg-purple-primary-500 w-full md:w-44 h-[50px] rounded-lg text-white text-sm flex items-center justify-center"
                    >
                        Search
                    </button>

                    <div className="flex w-full md:w-4/12 justify-between gap-4">
                        <div className="cursor-pointer bg-purple-primary-500 rounded-[10px] text-white flex gap-3 p-4 h-[50px] w-full md:w-[220px] items-center">
                            <img className="h-6 w-6" src="/src/assets/plus.svg" alt="Add Icon" />
                            <button
                                onClick={() => handleOpenModal()}
                                className="font-light text-sm leading-[24px]"
                            >
                                Add New Employee
                            </button>
                        </div>
                        <div className="cursor-pointer border rounded-[10px] flex gap-3 p-4 h-[50px] w-full md:w-[112px] items-center">
                            <img className="w-6 h-6" src="/src/assets/filter.svg" alt="Filter Icon" />
                            <p className="font-light text-sm leading-[24px] text-dark-500">Filter</p>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full border rounded-lg p-6 flex flex-col gap-6 items-center justify-center bg-white shadow-md">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b-[1px] border-gray-100 h-11">
                                {headings.map((head, index) => (
                                    <td
                                        key={index}
                                        className="h-11 font-normal text-sm text-nav-gray-500 px-4 text-center"
                                    >
                                        {head}
                                    </td>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((emp) => (
                                <tr key={emp.userId} className="h-14">
                                    <td className="border-b-[1px] border-gray-100 px-4 text-center">
                                        <p className="font-normal text-sm text-dark-500">{emp.fullName}</p>
                                    </td>
                                    <td className="border-b-[1px] border-gray-100 px-4 text-center">
                                        <p className="font-normal text-sm">{emp.companyID}</p>
                                    </td>
                                    <td className="border-b-[1px] border-gray-100 px-4 text-center">
                                        <p className="font-normal text-sm">{emp.team}</p>
                                    </td>
                                    <td className="border-b-[1px] border-gray-100 px-4 text-center">
                                        <p className="font-normal text-sm">{emp.designation}</p>
                                    </td>
                                    <td className="border-b-[1px] border-gray-100 px-4 text-center">
                                        <p className="font-normal text-sm">{emp.empType}</p>
                                    </td>
                                    <td className="border-b-[1px] border-gray-100 px-4 text-center">
                                        <p className="font-normal text-sm text-purple-primary-500 bg-purple-primary-100 rounded-md px-2">
                                            {emp.empRole}
                                        </p>
                                    </td>
                                    <td className="border-b-[1px] border-gray-100 px-4 text-center">
                                        <div className="flex items-center justify-center gap-3">
                                            <img
                                                className="w-6 h-6 cursor-pointer"
                                                src="/src/assets/eyes.svg"
                                                alt="View"
                                            />
                                            <img
                                                className="w-6 h-6 cursor-pointer"
                                                onClick={() => handleDelete(emp._id)}
                                                src="/src/assets/dustbin.svg"
                                                alt="Delete"
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="flex gap-4 items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                            <p className="text-sm">Showing</p>
                            <Dropdown start="10" />
                        </div>
                        <div className="w-8/12">
                            <Pagination />
                        </div>
                    </div>
                </div>

                {showModal && <AddEmployeeModal onClose={handleCloseModal} />}
            </div>
        </>
    )
}
