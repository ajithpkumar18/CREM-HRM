import OverviewCard from "../Common/OverviewCard";

export default function CompanyOverview() {
  return (
    <div className="grid grid-cols-2 gap-5">
      <OverviewCard source="/src/assets/images/totalemployee.svg" count="560" text="Total Employee" />
      <OverviewCard source="/src/assets/images/totalattendance.svg" count="470" text="Total Attendance" />
      <OverviewCard source="/src/assets/images/totalapplicant.svg" count="1050" text="Total Applicant" />
      <OverviewCard source="/src/assets/images/totalprojects.svg" count="250" text="Total Projects" />
    </div>
  );
}
