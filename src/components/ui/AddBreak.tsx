import React, { useState } from "react";
import axios from "axios";

const AddBreak = () => {
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    interface BreakData {
        breakStartTime?: string;
        breakEndTime?: string;
    }

    interface ApiResponse {
        message: string;
    }

    const sendCurrentTime = async (type: "start" | "end") => {
        try {
            const currentTime = new Date().toISOString();
            const payload: BreakData =
                type === "start"
                    ? { breakStartTime: currentTime }
                    : { breakEndTime: currentTime };

            const response = await axios.post<ApiResponse>(
                "http://localhost:3001/hr/attendance/break",
                payload,
                {
                    withCredentials: true,
                }
            );

            setMessage(response.data.message);
            setError("");
        } catch (err) {
            console.error(`Error sending ${type} time:`, err);
            setError((err as any).response?.data?.message || `Error sending ${type} time`);
            setMessage("");
        }
    };

    return (
        <div className="border py-5 bg-slate-400 px-4 text-white rounded-xl w-full">
            <h1 className="font-bold text-2xl text-center">Add Break</h1>
            <div className="flex flex-col gap-4 py-5">
                <button
                    onClick={() => sendCurrentTime("start")}
                    className="bg-slate-700 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
                >
                    Start Break
                </button>
                <button
                    onClick={() => sendCurrentTime("end")}
                    className="bg-slate-950 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
                >
                    End Break
                </button>
            </div>

            {message && <p className="text-purple-primary-500 text-center pt-2 font-semibold">{message}</p>}
            {error && <p className="text-red-500 text-center pt-2 font-semibold">{error}</p>}
        </div>
    );
};

export default AddBreak;