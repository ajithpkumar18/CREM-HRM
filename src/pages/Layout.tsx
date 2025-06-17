import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Sidebar from "../components/ui/Sidebar/Sidebar";

export default function Layout() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full">
                <Navbar />
                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}