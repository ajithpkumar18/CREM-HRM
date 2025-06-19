import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Sidebar from "../components/ui/Sidebar/Sidebar";

export default function Layout() {
    return (
        <div className="flex gap-3 w-full">

            <Sidebar />
            <div className="flex-1 py-6 px-8 overflow-y-auto">

                <Navbar />
                <div >

                    <Outlet />
                </div>
            </div>
        </div>
    );
}