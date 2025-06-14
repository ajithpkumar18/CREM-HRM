import { useEffect } from "react";
import Dropdown from "../Common/Dropdown";
import Pagination from "../Common/Pagination";
import { allEmployees } from "../../../data/atom";
import { useRecoilState } from "recoil";
import axios from "axios";

export default function AllEmp({ headings }: { headings: string[] }) {
    const [employees, setEmployees] = useRecoilState(allEmployees);
    useEffect(() => {
        axios.get('http://localhost:3001/hr/employees', {
            withCredentials: true
        }).then((response) => {
            console.log(response.data);
            setEmployees(response.data);
            console.log(employees);
        }).catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, [setEmployees])

    const handleDelete = async (id: any) => {
        const deleteUser = confirm("Are you sure you want to delete this employee?");
        console.log(deleteUser);
        if (deleteUser) {
            await axios.delete(`http://localhost:3001/hr/employee/${id}`, {
                withCredentials: true
            })
                .then((response) => {
                    console.log(response.data);
                    setEmployees(prev => prev.filter(emp => emp.userId !== id));
                    alert("Employee deleted successfully");
                }).catch((error) => {
                    console.error("Error deleting employee:", error);
                    alert("Failed to delete employee");
                });
        }
    }

    return (
        <div className="w-full h-full border rounded-lg p-5 flex flex-col gap-5 items-center justify-center">
            <table className="h-[422px] w-fit mx-auto my-0">
                <thead>
                    <tr className="border-b-[1px] border-gray-100 h-11 w-full">
                        {headings.map((head, index) => (
                            <td
                                key={index}
                                className="h-11  font-normal w-1/12 text-[16px] leading-[24px] text-nav-gray-500 px-4"
                            >
                                {head}
                            </td>
                        ))}
                    </tr>
                </thead>
                <tbody className="h-full">
                    {employees.map((emp) => (
                        <tr key={emp.userId} className="h-14 w-full">
                            <td className="max-h-11 w-1/12 border-b-[1px] border-gray-100 px-4"> {/* Added padding */}
                                <div className="flex items-center gap-3">
                                    <p className="font-normal text-[16px] leading-[24px] text-dark-500">
                                        {emp.fullName}
                                    </p>
                                </div>
                            </td>
                            <td className="h-11 border-b-[1px] w-1/12 border-gray-100 px-4"> {/* Added padding */}
                                <p className="font-normal w-3/4 py-1 text-[14px] leading-[18px]">
                                    {emp.companyID}
                                </p>
                            </td>
                            <td className="h-11 border-b-[1px] w-1/12 border-gray-100 px-4"> {/* Added padding */}
                                <p className="font-normal w-3/4 py-1 text-[14px] leading-[18px]">
                                    {emp.team}
                                </p>
                            </td>
                            <td className="border-b-[1px] w-1/12 border-gray-100 h-11 font-normal text-[16px] leading-[24px] text-dark-500 px-4"> {/* Added padding */}
                                <span>{emp.designation}</span>
                            </td>
                            <td className="border-b-[1px] w-1/12 border-gray-100 h-11 font-normal text-[16px] leading-[24px] text-dark-500 px-4"> {/* Added padding */}
                                {emp.empType}
                            </td>
                            <td className="h-11 border-b-[1px] w-1/12 border-gray-100 px-4"> {/* Added padding */}
                                <p className="font-normal w-3/4 py-1 text-[14px] leading-[18px] text-purple-primary-500 bg-purple-primary-100 rounded-md text-center px-2">
                                    {emp.empRole}
                                </p>
                            </td>
                            <td className="max-h-11 w-1/12 border-b-[1px] border-gray-100 px-4"> {/* Added padding */}
                                <div className="flex items-center gap-5">
                                    <img className="w-6 h-6 cursor-pointer" src="/src/assets/eyes.svg" alt="View" />
                                    <img
                                        className="w-6 h-6 cursor-pointer"
                                        onClick={() => handleDelete(emp.companyID)}
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
        </div>
    )
}

// function CapitalWords(mySentence: string) {
//     let words = mySentence.split(" ");

//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].substr(1) + " ";
//     }

//     return words;
// }