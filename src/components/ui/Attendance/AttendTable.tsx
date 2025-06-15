import Dropdown from "../Common/Dropdown";
import Pagination from "../Common/Pagination";

interface Employee {
    checkInTime: string;
    date: string;
    status: string;
    userDetails: {
        username: string;
        email: string;
    }
}

export default function AttendTable({ headings, onEditClick, employee }: { headings: string[], employee: Employee[], onEditClick: (checkInTime: string) => void }) {
    const handleEditClick = (time: string) => {
    };
    console.log(employee)
    return (
        <div className="w-full h-full border rounded-lg p-5 flex flex-col gap-5">
            <table className="h-[422px] w-full">
                <thead>
                    <tr className="border-b-[1px] border-gray-100 h-11 w-full">
                        {headings.map(head => (
                            <td className=" h-11 font-normal text-[16px] leading-[24px] text-nav-gray-500">{head}</td>
                        ))}
                    </tr>
                </thead>
                <tbody className="h-full">
                    {employee.map(emp => (
                        <tr className=" h-14 w-full">
                            <td className="max-h-11 w-[252px] border-b-[1px] border-gray-100 ">
                                <div className="flex items-center gap-3">
                                    {/* <img className="w-10 h-10" src={} alt="" /> */}
                                    <p className="font-normal text-[16px] leading-[24px] text-dark-500">
                                        {emp.userDetails.username}
                                    </p>
                                </div>
                            </td>
                            <td className="h-11 border-b-[1px] w-[225px] border-gray-100">
                                <p className={`font-normal w-3/4 py-1 text-[14px] leading-[18px]`}>
                                    {emp.userDetails.email}
                                </p>
                            </td>
                            <td className="h-11 border-b-[1px] w-[172px] border-gray-100">
                                <p className={`font-normal w-3/4 py-1 text-[14px] leading-[18px]}`}>
                                    {emp.date}
                                </p>
                            </td>
                            <td className="border-b-[1px] border-gray-100 h-11 font-normal text-[16px] leading-[24px] text-dark-500 relative group flex items-center">
                                <span className="mr-2">{emp.checkInTime}</span>
                                <button
                                    onClick={() => onEditClick(emp.checkInTime)}
                                    className="invisible group-hover:visible  transition-opacity duration-200 cursor-pointer"
                                >
                                    <img src="/src/assets/pencil.svg" alt="Edit" className="w-4 h-4" />
                                </button>

                            </td>
                            {/* <td className="border-b-[1px] w-[112px] border-gray-100 h-11 font-normal text-[16px] leading-[24px] text-dark-500">{emp.type}</td> */}
                            <td className="h-11 border-b-[1px] w-[110px] border-gray-100">
                                <p className={`font-normal  text-[14px] leading-[18px] ${emp.status.toLowerCase() == "late" ? "text-red-600 bg-red-100 rounded-md text-center py-1 w-2/4" : "text-green-500 bg-green-100 text-center py-1 w-3/4 rounded-md"} px-1"}`}>
                                    {CapitalWords(emp.status)}
                                </p>
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

function CapitalWords(mySentence: string) {
    let words = mySentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1) + " ";
    }

    return words;
}
