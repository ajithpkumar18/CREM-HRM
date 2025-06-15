import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router";
import { useRecoilState } from "recoil";
import { allEmployees } from "../../../data/atom";
const employee = [
    {
        src: "/noavatar.png", name: "John Doe", desgn: "Team Lead - Design", type: "Office", status: "Available"
    },
    { src: "/noavatar.png", name: "John Doe", desgn: "Team Lead - Design", type: "Office", status: "Available" },

    { src: "/noavatar.png", name: "John Doe", desgn: "Team Lead - Design", type: "Office", status: "on leave" },
    { src: "/noavatar.png", name: "John Doe", desgn: "Team Lead - Design", type: "Office", status: "Available" },
    { src: "/noavatar.png", name: "John Doe", desgn: "Team Lead - Design", type: "Office", status: "Available" }

]
export default function Employees() {
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
    return (
        <div className="w-[686px] border rounded-lg p-5 flex flex-col gap-5">
            <div className="flex items-center justify-between">
                <p className="w-10/12 h-[30px]  font-semibold text-[20px] leading-[30px]">
                    Employees
                </p>

                <Link to="" className="border rounded-xl w-20 h-10 py-2 text-center font-normal text-[14px] leading-[22px] text-dark-500">View all</Link>

            </div>
            <table className="h-[422px] w-full">
                <thead>
                    <tr className="border-b border-gray-100 h-11 w-full">
                        <td className=" h-11 font-normal text-[16px] leading-[24px] text-nav-gray-500">Employee Name</td>
                        <td className=" h-11 font-normal text-[16px] leading-[24px] text-nav-gray-500">Designation</td>
                        <td className=" h-11 font-normal text-[16px] leading-[24px] text-nav-gray-500">Type</td>
                        <td className=" h-11 font-normal text-[16px] leading-[24px] text-nav-gray-500">Status</td>
                    </tr>
                </thead>
                <tbody className="h-full">
                    {employees.map(emp => (
                        <tr className=" h-11 w-full">
                            <td className="max-h-11 w-4/12 border-b-[1px] border-gray-100">
                                <div className="flex items-center gap-3">
                                    {/* <img className="w-10 h-10" src={} alt="" /> */}
                                    <p className="font-normal text-[16px] leading-[24px] text-dark-500">
                                        {emp.fullName}
                                    </p>
                                </div>
                            </td>
                            <td className="border-b w-4/12 border-gray-100 h-11 font-normal text-[16px] leading-[24px] text-dark-500">
                                <span className="{}">{emp.companyID}</span>
                            </td>
                            <td className="border-b w-2/12 border-gray-100 h-11 font-normal text-[16px] leading-[24px] text-dark-500">{emp.empType}</td>
                            <td className="h-11 border-b w-2/12 border-gray-100">
                                <p className={`font-normal w-3/4 py-1 text-[12px] leading-[18px] ${true ? "text-green-500 bg-green-100 rounded-sm text-center" : "text-red-600 bg-red-100 rounded-sm text-center"}`}>
                                    {emp.residence}
                                </p>
                            </td>
                        </tr>
                    ))}
                    {/* <tr>

                        <td>
                            <div className="flex">

                                <img src="/noavatar.png" alt="" width={40} height={40} className="" />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className="{}">Team Lead - Design</span>
                        </td>
                        <td>Office</td>
                        <td>Available</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="">
                                <img src="/noavatar.png" alt="" width={40} height={40} className="" />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className="">Done</span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="">
                                <img src="/noavatar.png" alt="" width={40} height={40} className="" />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className="">Cancelled</span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="">
                                <img src="/noavatar.png" alt="" width={40} height={40} className="" />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className="">Pending</span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr> */}
                </tbody>
            </table>
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