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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!breakStartTime || !breakEndTime) {
            setError("Both break start time and end time are required.");
            return;
        }

        try {
            const response = await axios.post<ApiResponse>(
                "http://localhost:3001/hr/attendance/break",
                {
                    breakStartTime,
                    breakEndTime,
                } as BreakData,
                {
                    withCredentials: true
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
        <div>
            <h1>Add Break</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="breakStartTime">Break Start Time:</label>
                    <input
                        type="datetime-local"
                        id="breakStartTime"
                        value={breakStartTime}
                        onChange={(e) => setBreakStartTime(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="breakEndTime">Break End Time:</label>
                    <input
                        type="datetime-local"
                        id="breakEndTime"
                        value={breakEndTime}
                        onChange={(e) => setBreakEndTime(e.target.value)}
                    />
                </div>
                <button type="submit">Add Break</button>
            </form>

            {message && <p style={{ color: "green" }}>{message}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default AddBreak;