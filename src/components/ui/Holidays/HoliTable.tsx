
const employee = [

    { date: "January 01, 2023", day: "Tuesday", name: "New Year", upcoming: false },
    { date: "January 01, 2023", day: "Tuesday", name: "New Year", upcoming: false },

    { date: "January 01, 2023", day: "Tuesday", name: "New Year", upcoming: false },
    { date: "January 01, 2023", day: "Tuesday", name: "New Year", upcoming: false },
    { date: "January 01, 2023", day: "Tuesday", name: "New Year", upcoming: false },
    { date: "January 01, 2023", day: "Tuesday", name: "New Year", upcoming: false },

    { date: "January 01, 2023", day: "Tuesday", name: "New Year", upcoming: false },
    { date: "January 01, 2023", day: "Tuesday", name: "New Year", upcoming: false },
    { date: "January 01, 2023", day: "Tuesday", name: "New Year", upcoming: false },
    { date: "January 01, 2023", day: "Tuesday", name: "New Year", upcoming: true },
    { date: "January 01, 2023", day: "Tuesday", name: "New Year", upcoming: true },

    { date: "January 01, 2023", day: "Tuesday", name: "New Year", upcoming: true },
    { date: "January 01, 2023", day: "Tuesday", name: "New Year", upcoming: true }

]
// interface Items { src: string, name: string, id: Number, department: string, desgn: string, type: string, status: string }

export default function HoliTable({ headings }: { headings: string[] }) {
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
                            <td className="max-h-11 w-[248px] border-b-[1px] border-gray-100">
                                <div className={`${emp.upcoming ? "border-purple-primary-500" : "border-gray-100"} border-l-2 h-[44px] flex items-center px-2`}>
                                    <p className="font-normal text-[16px] leading-[24px] text-dark-500">
                                        {emp.date}
                                    </p>
                                </div>
                            </td>
                            <td className="h-11 border-b-[1px] w-[178px] border-gray-100">
                                <p className={`font-normal w-3/4 py-1 text-[14px] leading-[18px]`}>
                                    {emp.day}
                                </p>
                            </td>
                            <td className="h-11 border-b-[1px] w-[614px] border-gray-100">
                                <p className={`font-normal w-3/4 py-1 text-[14px] leading-[18px]}`}>
                                    {emp.name}
                                </p>
                            </td>


                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex gap-5 items-center h-[22px]">
                <div className="flex items-center gap-1 h-full">
                    <div className="content-none h-[10px] w-[10px] rounded-full bg-purple-primary-500"></div>
                    <p className="h-full font-semibold text-[14px] leading-[22px]">Upcoming</p>
                </div>
                <div className="flex items-center gap-1">
                    <div className="content-none h-[10px] w-[10px] rounded-full  bg-nav-gray-500"></div>
                    <p className="h-full font-semibold text-[14px] leading-[22px]">Past Holidays</p>
                </div>
            </div>
        </div>
    )
}