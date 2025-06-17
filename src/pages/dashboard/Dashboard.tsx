import { useEffect } from "react";
import PieCharts from "../../components/ui/Common/PieCharts";
import CompanyOverview from "../../components/ui/Dashboard/CompanyOverview";
import Employees from "../../components/ui/Dashboard/Employees";
import TeamPerformance from "../../components/ui/Dashboard/TeamPerformance";

import axios from "axios";
import { useRecoilState } from "recoil";
import { userData } from "../../data/atom";
import AddBreak from "../../components/ui/AddBreak";

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
            <div>
                <AddBreak />
            </div>
            <div className="flex border rounded-xl h-[345px] justify-evenly px-7 gap-30 mb-5 mr-7">
                <CompanyOverview />
                <TeamPerformance />
            </div>
            <div className="flex gap-6 w-full">
                <Employees />
                <PieCharts />
            </div>
        </>
    )
}

