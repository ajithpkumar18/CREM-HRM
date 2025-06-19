import { useState, useEffect } from "react";
import axios from "axios";
import { getDateOnly, getDayFromDate } from "../../addons/DateMesc";

export default function HoliTable({ headings }: { headings: string[] }) {
    const [holidays, setHolidays] = useState<{ date: string; description: string; name: string; upcoming: boolean }[]>([]);
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
        <div className="w-full h-full border rounded-lg p-6 flex flex-col gap-6 bg-white shadow-md">
            {loading ? (
                <p className="text-center text-gray-500">Loading holidays...</p>
            ) : error ? (
                <p className="text-center text-red-500">{error}</p>
            ) : (
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b-[1px] border-gray-200 h-12 bg-gray-50">
                            {headings.map((head, index) => (
                                <th
                                    key={index}
                                    className="text-left font-medium text-[14px] leading-[20px] text-gray-600 px-4 py-2"
                                >
                                    {head}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {holidays.map((holiday, index) => (
                            <tr key={index} className="h-14 hover:bg-gray-100">

                                <td className="border-b-[1px] border-gray-200 px-4 py-2">
                                    <div
                                        className={`h-[44px] flex items-center px-2 ${holiday.upcoming ? "border-l-4 border-purple-primary-500" : "border-l-4 border-gray-200"
                                            }`}
                                    >
                                        <p className="font-normal text-[14px] leading-[20px] text-gray-800">
                                            {getDateOnly(holiday.date)}
                                        </p>
                                    </div>
                                </td>


                                <td className="border-b-[1px] border-gray-200 px-4 py-2">
                                    <p className="font-normal text-[14px] leading-[20px] text-gray-600">
                                        {getDayFromDate(holiday.date)}
                                    </p>
                                </td>


                                <td className="border-b-[1px] border-gray-200 px-4 py-2">
                                    <p className="font-normal text-[14px] leading-[20px] text-gray-800">
                                        {holiday.description}
                                    </p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <div className="flex gap-5 items-center mt-4">
                <div className="flex items-center gap-2">
                    <div className="h-[10px] w-[10px] rounded-full bg-purple-primary-500"></div>
                    <p className="text-[14px] font-medium text-gray-800">Upcoming</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-[10px] w-[10px] rounded-full bg-gray-400"></div>
                    <p className="text-[14px] font-medium text-gray-800">Past Holidays</p>
                </div>
            </div>
        </div>
    );
}