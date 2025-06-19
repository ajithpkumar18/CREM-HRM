import React, { useState } from "react";
import axios from "axios";

const AddBreak = () => {
    const [breakStartTime, setBreakStartTime] = useState("");
    const [breakEndTime, setBreakEndTime] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    interface BreakData {
        breakStartTime: string;
        breakEndTime: string;
    }

    interface ApiResponse {
        message: string;
    }

    const createFullDate = (time: string): string => {
        const currentDate = new Date();
        const [hours, minutes] = time.split(":").map(Number);

        // Set the hours and minutes to the current date
        currentDate.setHours(hours, minutes, 0, 0);

        return currentDate.toISOString(); // Convert to ISO string for backend compatibility
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!breakStartTime || !breakEndTime) {
            setError("Both break start time and end time are required.");
            return;
        }

        try {
            const fullBreakStartTime = createFullDate(breakStartTime);
            const fullBreakEndTime = createFullDate(breakEndTime);

            const response = await axios.post<ApiResponse>(
                "http://localhost:3001/hr/attendance/break",
                {
                    breakStartTime: fullBreakStartTime,
                    breakEndTime: fullBreakEndTime,
                } as BreakData,
                {
                    withCredentials: true,
                }
            );

            setMessage(response.data.message);
            setError("");
        } catch (err) {
            console.error("Error adding break:", err);
            setError((err as any).response?.data?.message || "Error adding break");
            setMessage("");
        }
    };

    return (
        <div className="border py-5 bg-slate-400 px-4 text-white rounded-xl mb- w-full">
            <h1 className="font-bold text-2xl text-ellipsis text-center">Add Break</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex gap-5 py-5">
                    <label htmlFor="breakStartTime">Break Start Time:</label>
                    <input
                        className="bg-slate-300 rounded-md"
                        type="time"
                        id="breakStartTime"
                        value={breakStartTime}
                        onChange={(e) => setBreakStartTime(e.target.value)}
                    />
                </div>
                <div className="flex gap-6 pb-5">
                    <label htmlFor="breakEndTime">Break End Time:</label>
                    <input
                        className="bg-slate-300 rounded-md"
                        type="time"
                        id="breakEndTime"
                        value={breakEndTime}
                        onChange={(e) => setBreakEndTime(e.target.value)}
                    />
                </div>
                <button type="submit" className="bg-gray-300 p-3 rounded-lg w-full">Add Break</button>
            </form>

            {message && <p className="text-purple-primary-500 text-center pt-2 font-semibold">{message}</p>}
            {error && <p className="text-red-500 text-center pt-2 font-semibold">{error}</p>}
        </div>
    );
};

export default AddBreak;