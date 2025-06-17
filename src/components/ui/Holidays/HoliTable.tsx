import { useState, useEffect } from "react";
import axios from "axios";
import { getDateOnly, getDayFromDate } from "../../addons/DateMesc";

export default function HoliTable({ headings }: { headings: string[] }) {
    const [holidays, setHolidays] = useState<{ date: string; day: string; name: string; upcoming: boolean }[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchHolidays = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get("http://localhost:3001/hr/holidays", {
                withCredentials: true,
            });
            console.log("Fetched holidays:", response.data);
            setHolidays(response.data);
        } catch (err: any) {
            console.error("Error fetching holidays:", err);
            setError(err.response?.data?.message || "Failed to fetch holidays");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchHolidays();
    }, []);

    return (
        <div className="w-full h-full border rounded-lg p-5 flex flex-col gap-5">
            {loading ? (
                <p>Loading holidays...</p>
            ) : error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : (
                <table className="h-[422px] w-full">
                    <thead>
                        <tr className="border-b-[1px] border-gray-100 h-11 w-full">
                            {headings.map((head, index) => (
                                <td
                                    key={index}
                                    className="h-11 font-normal text-[16px] leading-[24px] text-nav-gray-500"
                                >
                                    {head}
                                </td>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="h-full">
                        {holidays.map((holiday, index) => (
                            <tr key={index} className="h-14 w-full">
                                <td className="max-h-11 w-4/12 border-b-[1px] border-gray-100">
                                    <div
                                        className={`${holiday.upcoming ? "border-purple-primary-500" : "border-gray-100"
                                            } border-l-2 h-[44px] flex items-center px-2`}
                                    >
                                        <p className="font-normal text-[16px] leading-[24px] text-dark-500">
                                            {getDateOnly(holiday.date)}
                                        </p>
                                    </div>
                                </td>
                                <td className="h-11 border-b-[1px] w-4/12 border-gray-100">
                                    <p className="font-normal py-1 text-[14px] leading-[18px]">
                                        {getDayFromDate(holiday.date)}
                                    </p>
                                </td>
                                <td className="h-11 border-b-[1px] w-4/12 border-gray-100">
                                    <p className="font-normal py-1 text-[14px] leading-[18px]">
                                        {holiday.day}
                                    </p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <div className="flex gap-5 items-center h-[22px]">
                <div className="flex items-center gap-1 h-full">
                    <div className="content-none h-[10px] w-[10px] rounded-full bg-purple-primary-500"></div>
                    <p className="h-full font-semibold text-[14px] leading-[22px]">Upcoming</p>
                </div>
                <div className="flex items-center gap-1">
                    <div className="content-none h-[10px] w-[10px] rounded-full bg-nav-gray-500"></div>
                    <p className="h-full font-semibold text-[14px] leading-[22px]">Past Holidays</p>
                </div>
            </div>
        </div>
    );
}