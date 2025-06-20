import { useEffect } from "react";
import PieCharts from "../../components/ui/Common/PieCharts";
import CompanyOverview from "../../components/ui/Dashboard/CompanyOverview";
import Employees from "../../components/ui/Dashboard/Employees";
import TeamPerformance from "../../components/ui/Dashboard/TeamPerformance";

import axios from "axios";
import { useRecoilState } from "recoil";
import { userData } from "../../data/atom";

export default function Dashboard() {
    const [user, setUser] = useRecoilState(userData);

    console.log(user);
    console.log(document.cookie)
    useEffect(() => {
        axios.get('http://localhost:3001/hr/employee', {
            withCredentials: true
        }).then((response) => {
            console.log(response.data)
            setUser(response.data);
            console.log(user);
        }).catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, [setUser]);

    return (
        <>
            <div className="flex flex-col gap-6">
                <div className="flex border rounded-xl h-[345px] px-7 mb-5 gap-6">
                    <CompanyOverview />
                    <TeamPerformance />
                </div>
                <div className="flex gap-6 w-full">
                    <Employees />
                    <PieCharts />
                </div>
            </div>
        </>
    )
}

