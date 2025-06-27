import { useState } from "react";
import HoliTable from "../../components/ui/Holidays/HoliTable";
import CreateHolidayModal from "../../components/ui/Modals/AddHolidayModal";
import * as XLSX from "xlsx";
import axios from "axios";

export default function Holidays() {
    const [open, setOpen] = useState(false);

    function handleClose() {
        setOpen(e => !e);
    }

    function handleOpen() {
        setOpen(e => !e);
    }

    const handleBulkUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            const data = await file.arrayBuffer();
            const workbook = XLSX.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            let jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: "" });

            jsonData = jsonData.map((row: any) => {
                const trimmedRow: any = {};
                Object.keys(row).forEach((key) => {
                    let value = row[key];
                    if (key.trim() === "date") {
                        if (typeof value === "number") {
                            const jsDate = XLSX.SSF.parse_date_code(value);
                            if (jsDate) {
                                value = `${jsDate.y}-${String(jsDate.m).padStart(2, "0")}-${String(jsDate.d).padStart(2, "0")}`;
                            }
                        } else if (typeof value === "string" && value.includes("-")) {
                            const [dd, mm, yyyy] = value.split("-");
                            if (dd && mm && yyyy) {
                                value = `${yyyy}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}`;
                            }
                        }
                    }
                    trimmedRow[key.trim()] = value;
                });
                return trimmedRow;
            });

            await axios.post("http://localhost:3001/hr/holidays/bulk-upload", {
                holidays: jsonData
            }, {
                withCredentials: true,
            });
            alert("Bulk holidays uploaded successfully!");
        } catch (err: any) {
            console.error("Bulk upload error:", err);
            alert("Failed to upload bulk holidays. Please check your file format.");
        }
    };

    return (
        <>
            <div className="w-full h-full rounded-[10px] flex flex-col gap-6 ">

                <div className="w-full flex flex-wrap justify-between items-center gap-4">

                    <div className="flex items-center px-4 border rounded-[10px] w-full md:w-4/12 h-[50px] gap-3 bg-white">
                        <img className="w-6 h-6" src="/src/assets/dashboard/Navbar/search.svg" alt="Search Icon" />
                        <input
                            className="w-full outline-none text-sm"
                            type="text"
                            placeholder="Search"
                        />
                    </div>

                    <div className="flex w-full md:w-6/12 justify-between gap-4">
                        <div onClick={handleOpen} className="cursor-pointer bg-purple-primary-500 rounded-[10px] text-white flex gap-3 p-4 h-[50px] w-full md:w-[220px] items-center">
                            <img className="h-6 w-6" src="/src/assets/plus.svg" alt="Add Icon" />
                            <p className="font-light text-sm leading-[24px]">Add New Holiday</p>
                        </div>
                        <div className="cursor-pointer border bg-white rounded-[10px] text-black flex gap-3 p-4 h-[50px] w-full md:w-[180px] items-center relative">
                            <img className="h-6 w-6" src="/src/assets/plus.svg" alt="Upload Icon" />
                            <p className="font-light text-sm leading-[24px]">Upload Bulk</p>
                            <input
                                type="file"
                                accept=".xlsx,.xls"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                title="Upload Excel"
                                onChange={handleBulkUpload}
                            />
                        </div>
                        <div className="cursor-pointer border rounded-[10px] flex justify-center items-center h-[50px] w-[60px] bg-white">
                            <img className="w-6 h-6" src="/src/assets/filter.svg" alt="Filter Icon" />
                        </div>
                    </div>
                </div>

                <div className="w-full h-full border rounded-lg flex flex-col gap-6 bg-white shadow-md">
                    <HoliTable headings={["Date", "Day", "Holiday Name"]} />
                </div>
            </div>
            {open ? <CreateHolidayModal onClose={handleClose} /> : ""}
        </>
    );
}
