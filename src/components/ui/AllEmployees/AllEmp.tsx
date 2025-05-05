import Dropdown from "../Common/Dropdown";
import Pagination from "../Common/Pagination";
const employee = [
    {
        src: "/noavatar.png", name: "John Doe", id: 123456789, department: "Development", desgn: "Team Lead - Design", type: "Office", status: "Available"
    },
    { src: "/noavatar.png", name: "John Doe", id: 123456789, department: "Development", desgn: "Team Lead - Design", type: "Office", status: "Available" },

    { src: "/noavatar.png", name: "John Doe", id: 123456789, department: "Development", desgn: "Team Lead - Design", type: "Office", status: "on leave" },
    { src: "/noavatar.png", name: "John Doe", id: 123456789, department: "Development", desgn: "Team Lead - Design", type: "Office", status: "Available" },
    { src: "/noavatar.png", name: "John Doe", id: 123456789, department: "Development", desgn: "Team Lead - Design", type: "Office", status: "Available" },
    { src: "/noavatar.png", name: "John Doe", id: 123456789, department: "Development", desgn: "Team Lead - Design", type: "Office", status: "Available" },

    { src: "/noavatar.png", name: "John Doe", id: 123456789, department: "Development", desgn: "Team Lead - Design", type: "Office", status: "on leave" },
    { src: "/noavatar.png", name: "John Doe", id: 123456789, department: "Development", desgn: "Team Lead - Design", type: "Office", status: "Available" },
    { src: "/noavatar.png", name: "John Doe", id: 123456789, department: "Development", desgn: "Team Lead - Design", type: "Office", status: "Available" },
    { src: "/noavatar.png", name: "John Doe", id: 123456789, department: "Development", desgn: "Team Lead - Design", type: "Office", status: "Available" },

    { src: "/noavatar.png", name: "John Doe", id: 123456789, department: "Development", desgn: "Team Lead - Design", type: "Office", status: "on leave" },
    { src: "/noavatar.png", name: "John Doe", id: 123456789, department: "Development", desgn: "Team Lead - Design", type: "Office", status: "Available" },
    { src: "/noavatar.png", name: "John Doe", id: 123456789, department: "Development", desgn: "Team Lead - Design", type: "Office", status: "Available" }

]
// interface Items { src: string, name: string, id: Number, department: string, desgn: string, type: string, status: string }

export default function AllEmp({ headings }: { headings: string[] }) {
    return (
        <div className="w-full h-full border rounded-lg p-5 flex flex-col gap-5">
            <table className="h-[422px] w-full">
                <thead>
                    <tr className="border-b-[1px] border-gray-100 h-11 w-full">
                        {headings.map(head => (
                            <td className=" h-11 font-normal text-[16px] leading-[24px] text-nav-gray-500">{head}</td>
                        ))}
                        {/* <td className=" h-11 font-normal text-[16px] leading-[24px] text-nav-gray-500">Employee Name</td>
                        <td className=" h-11 font-normal text-[16px] leading-[24px] text-nav-gray-500">Employee ID</td>
                        <td className=" h-11 font-normal text-[16px] leading-[24px] text-nav-gray-500">Department</td>
                        <td className=" h-11 font-normal text-[16px] leading-[24px] text-nav-gray-500">Designation</td>
                        <td className=" h-11 font-normal text-[16px] leading-[24px] text-nav-gray-500">Type</td>
                        <td className=" h-11 font-normal text-[16px] leading-[24px] text-nav-gray-500">Status</td>
                        <td className=" h-11 font-normal text-[16px] leading-[24px] text-nav-gray-500">Action</td> */}
                    </tr>
                </thead>
                <tbody className="h-full">
                    {employee.map(emp => (
                        <tr className=" h-14 w-full">
                            <td className="max-h-11 w-[252px] border-b-[1px] border-gray-100">
                                <div className="flex items-center gap-3">
                                    <img className="w-10 h-10" src={emp.src} alt="" />
                                    <p className="font-normal text-[16px] leading-[24px] text-dark-500">
                                        {emp.name}
                                    </p>
                                </div>
                            </td>
                            <td className="h-11 border-b-[1px] w-[132px] border-gray-100">
                                <p className={`font-normal w-3/4 py-1 text-[14px] leading-[18px]`}>
                                    {emp.id}
                                </p>
                            </td>
                            <td className="h-11 border-b-[1px] w-[172px] border-gray-100">
                                <p className={`font-normal w-3/4 py-1 text-[14px] leading-[18px]}`}>
                                    {emp.department}
                                </p>
                            </td>
                            <td className="border-b-[1px] w-[162px] border-gray-100 h-11 font-normal text-[16px] leading-[24px] text-dark-500">
                                <span className="{}">{emp.desgn}</span>
                            </td>
                            <td className="border-b-[1px] w-[112px] border-gray-100 h-11 font-normal text-[16px] leading-[24px] text-dark-500">{emp.type}</td>
                            <td className="h-11 border-b-[1px] w-[110px] border-gray-100">
                                <p className={`font-normal w-3/4 py-1 text-[14px] leading-[18px] text-purple-primary-500 bg-purple-primary-100 rounded-md text-center px-2"}`}>
                                    {CapitalWords(emp.status)}
                                </p>
                            </td>


                            <td className="max-h-11 w-[100px] border-b-[1px] border-gray-100">
                                <div className="flex items-center gap-1">
                                    <img className="w-6 h-6 cursor-pointer" src="/src/assets/eyes.svg" alt="" />
                                    <img className="w-6 h-6 cursor-pointer" src="/src/assets/dustbin.svg" alt="" />
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

function CapitalWords(mySentence: string) {
    let words = mySentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1) + " ";
    }

    return words;
}