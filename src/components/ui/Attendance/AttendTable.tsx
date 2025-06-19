import { Employee } from "../../../data/atom";
import { getTimeOnly } from "../../addons/DateMesc";
import Dropdown from "../Common/Dropdown";
import Pagination from "../Common/Pagination";

export default function AttendTable({ headings, onEditClick, employee }: { headings: string[], employee: Employee[], onEditClick: (checkInTime: string) => void }) {
    const handleEditClick = (time: string) => {
        onEditClick(time);
    };

    return (
        <div className="w-full h-full border rounded-lg flex flex-col gap-6 bg-white shadow-md">

            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b-[1px] border-gray-200 h-12 bg-gray-50">
                        {headings.map((head, index) => (
                            <th
                                key={index}
                                className="text-left font-medium text-[14px] leading-[20px] text-gray-600 px-4 py-2"
                            >
                                {head}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {employee && employee.map((emp, index) => (
                        <tr key={index} className="h-14 hover:bg-gray-100">

                            <td className="border-b-[1px] border-gray-200 px-4 py-2">
                                <div className="flex items-center gap-3">
                                    <p className="font-normal text-[14px] leading-[20px] text-gray-800">
                                        {emp.userDetails.username}
                                    </p>
                                </div>
                            </td>

                            <td className="border-b-[1px] border-gray-200 px-4 py-2">
                                <p className="font-normal text-[14px] leading-[20px] text-gray-600">
                                    {emp.userDetails.email}
                                </p>
                            </td>

                            <td className="border-b-[1px] border-gray-200 px-4 py-2">
                                <p className="font-normal text-[14px] leading-[20px] text-gray-600">
                                    {emp.date}
                                </p>
                            </td>

                            <td className="border-b-[1px] border-gray-200 px-4 py-2 relative group">
                                <span className="font-normal text-[14px] leading-[20px] text-gray-800">
                                    {getTimeOnly(emp.checkInTime)}
                                </span>
                                <button
                                    onClick={() => handleEditClick(emp.checkInTime)}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 invisible group-hover:visible transition-opacity duration-200 cursor-pointer"
                                >
                                    <img src="/src/assets/pencil.svg" alt="Edit" className="w-4 h-4" />
                                </button>
                            </td>
                            <td className="border-b-[1px] border-gray-200 px-4 py-2 relative group">
                                <span className="font-normal text-[14px] leading-[20px] text-gray-800">
                                    {emp.checkOutTime ? getTimeOnly(emp.checkOutTime) : "pending"}
                                </span>
                                <button
                                    onClick={() => handleEditClick(emp.checkInTime)}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 invisible group-hover:visible transition-opacity duration-200 cursor-pointer"
                                >
                                    <img src="/src/assets/pencil.svg" alt="Edit" className="w-4 h-4" />
                                </button>
                            </td>

                            <td className="border-b-[1px] border-gray-200 px-4 py-2">
                                <p
                                    className={`font-normal text-[14px] leading-[20px] text-center py-1 rounded-md ${emp.status.toLowerCase() === "late"
                                        ? "text-red-600 bg-red-100"
                                        : "text-green-600 bg-green-100"
                                        }`}
                                >
                                    {CapitalWords(emp.status)}
                                </p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex gap-4 items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-600">Showing</p>
                    <Dropdown start="10" />
                </div>
                <div className="w-8/12">
                    <Pagination />
                </div>
            </div>
        </div>
    );
}

function CapitalWords(mySentence: string) {
    let words = mySentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
}
