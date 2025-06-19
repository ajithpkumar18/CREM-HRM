import OverviewCard from "../Common/OverviewCard";

export default function CompanyOverview() {
    return (
        <div className=" h-full w-full flex items-center px-5 ">
            <div className="flex flex-col w-5/12 justify-center gap-5 pl-5 border-r border-dashed border-gray-300" >
                <OverviewCard className="border-b border-dashed border-gray-300 pb-2 pl-2" source="/src/assets/images/totalemployee.svg" count="560" text="Total Employee" />
                <OverviewCard className="pl-2" source="/src/assets/images/totalapplicant.svg" count="1050" text="Total Applicant" />
            </div>
            <div className="flex flex-col w-[10rem] justify-center gap-5 py-3">
                <OverviewCard className="border-b border-dashed border-gray-300 pb-2 pl-12" source="/src/assets/images/totalattendance.svg" count="470" text="Total Attendance" />
                <OverviewCard className="pl-12" source="/src/assets/images/totalprojects.svg" count="250" text="Total Projects" />
            </div>
        </div >
    )
}
