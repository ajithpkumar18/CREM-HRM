import React from "react";
import Leads from "../../components/ui/AllLeads/Leads";
import CreateLeadModal from "../../components/ui/Modals/AddLeadModal";
import { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import { Lead } from "../../data/types";

export default function AllLeads() {
    const [showModal, setShowModal] = useState(false);
    const [leads, setLeads] = useState<Lead[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchLeads = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get("http://localhost:3001/hr/leads", {
                withCredentials: true
            });
            setLeads(response.data);
        } catch (err: any) {
            console.error("Error fetching leads:", err);
            setError(err.response?.data?.message || "Failed to fetch leads");
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async () => {
        if (!searchQuery.trim()) {
            fetchLeads();
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await axios.get("http://localhost:3001/hr/leads/search", {
                params: { query: searchQuery },
                withCredentials: true,
            });
            setLeads(response.data);
        } catch (err: any) {
            console.error("Error searching leads:", err);
            setError(err.response?.data?.message || "Failed to search leads");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

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
                    trimmedRow[key.trim()] = row[key];
                });
                return trimmedRow;
            });

            await axios.post("http://localhost:3001/hr/leads/bulk-upload", {
                leads: jsonData
            }, {
                withCredentials: true,
            });
            alert("Bulk leads uploaded successfully!");
            fetchLeads();
        } catch (err: any) {
            console.error("Bulk upload error:", err);
            alert("Failed to upload bulk leads. Please check your file format.");
        }
    };

    return (
        <div className="w-full h-full rounded-[10px] flex flex-col gap-6 mt-5 px-2 md:px-6">
            <div className="w-full flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 md:gap-5">
                <div className="flex items-center px-4 border rounded-[10px] w-full md:w-4/12 h-[50px] gap-3 bg-white">
                    <img className="w-6 h-6" src="/src/assets/dashboard/Navbar/search.svg" alt="Search Icon" />
                    <input
                        className="w-full outline-none text-sm"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by name or service"
                    />
                </div>
                <button
                    onClick={handleSearch}
                    className="bg-purple-primary-500 w-full md:w-44 h-[50px] rounded-lg text-white text-sm flex items-center justify-center"
                >
                    Search
                </button>
                <div className="flex flex-col md:flex-row w-full md:w-6/12 justify-between gap-2">
                    <div className="cursor-pointer bg-purple-primary-500 rounded-[10px] text-white flex gap-3 p-4 h-[50px] w-full md:w-[220px] items-center">
                        <img className="h-6 w-6" src="/src/assets/plus.svg" alt="Add Icon" />
                        <button
                            onClick={handleOpenModal}
                            className="font-light text-sm leading-[24px] w-full text-left"
                        >
                            Add New Lead
                        </button>
                    </div>
                    <div className="cursor-pointer border rounded-[10px] flex gap-3 p-4 h-[50px] w-full md:w-[180px] items-center bg-white relative">
                        <img className="h-6 w-6" src="/src/assets/plus.svg" alt="Upload Icon" />
                        <p className="font-light text-sm leading-[24px] text-dark-500">Upload Bulk</p>
                        <input
                            type="file"
                            accept=".xlsx,.xls,.csv"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            title="Upload Excel or CSV"
                            onChange={handleBulkUpload}
                        />
                    </div>
                    <div className="cursor-pointer border rounded-[10px] flex justify-center items-center h-[50px] w-full md:w-[60px] bg-white">
                        <img className="w-6 h-6" src="/src/assets/filter.svg" alt="Filter Icon" />
                    </div>
                </div>
            </div>

            <div className="w-full h-full border rounded-lg flex flex-col gap-6 bg-white shadow-md overflow-x-auto">
                {loading ? (
                    <p className="p-4">Loading...</p>
                ) : error ? (
                    <p className="p-4 text-red-500">{error}</p>
                ) : (
                    <Leads
                        headings={[
                            "Contact Person",
                            "Contact Number",
                            "Market Niche",
                            "Service",
                            "Assigned to",
                            "Status",
                            "Action",
                        ]}
                        leads={leads}
                        onLeadsUpdated={fetchLeads}
                    />
                )}
            </div>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
                    <div className="relative w-full max-w-2xl p-4">
                        <CreateLeadModal onClose={handleCloseModal} />
                    </div>
                </div>
            )}
        </div>
    );
}