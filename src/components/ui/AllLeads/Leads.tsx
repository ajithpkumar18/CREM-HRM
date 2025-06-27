import React, { useState } from "react";
import Dropdown from "../Common/Dropdown";
import Pagination from "../Common/Pagination";
import axios from "axios";
import { Lead, LeadsProps } from "../../../data/types";

const Leads: React.FC<LeadsProps> = ({ headings, leads, onLeadsUpdated }) => {
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editLead, setEditLead] = useState<Lead | null>(null);
    const [editForm, setEditForm] = useState<Partial<Lead>>({});

    const handleDelete = async (id: string) => {
        const confirmDelete = confirm("Are you sure you want to delete this lead?");
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:3001/hr/leads/${id}`, {
                    withCredentials: true,
                });
                alert("Lead deleted successfully");
                onLeadsUpdated && onLeadsUpdated();
            } catch (error) {
                console.error("Error deleting lead:", error);
                alert("Failed to delete lead");
            }
        }
    };

    const handleEditClick = (lead: Lead) => {
        setEditLead(lead);
        setEditForm(lead);
        setEditModalOpen(true);
    };

    const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setEditForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleEditSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editLead) return;
        try {
            console.log(editLead._id);
            await axios.patch(
                `http://localhost:3001/hr/leads/${editLead._id}`,
                editForm,
                { withCredentials: true }
            );
            alert("Lead updated successfully");
            setEditModalOpen(false);
            setEditLead(null);
            onLeadsUpdated && onLeadsUpdated();
        } catch (error) {
            console.log(error);
            alert("Failed to update lead");
        }
    };

    return (
        <div className="w-full h-full border rounded-lg p-5 flex flex-col gap-5 items-center justify-center">
            <table className="h-[422px] w-full">
                <thead>
                    <tr className="border-b-[1px] border-gray-100 h-11">
                        {headings.map((head, index) => (
                            <td
                                key={index}
                                className="h-11 font-normal text-[16px] leading-[24px] text-nav-gray-500 px-4 text-center"
                            >
                                {head}
                            </td>
                        ))}
                    </tr>
                </thead>
                <tbody className="h-full">
                    {leads.map((lead) => (
                        <tr className="h-14 w-full" key={lead._id}>
                            <td className="max-h-11 w-1/12 border-b-[1px] border-gray-100 px-4">
                                <div className="flex items-center gap-3">
                                    <p className="font-normal text-[16px] leading-[24px] text-dark-500">
                                        {lead.contact_person}
                                    </p>
                                </div>
                            </td>
                            <td className="h-11 border-b-[1px] w-1/12 border-gray-100 px-4">
                                <p className="font-normal w-3/4 py-1 text-[14px] leading-[18px]">
                                    {lead.contact_number}
                                </p>
                            </td>
                            <td className="h-11 border-b-[1px] w-1/12 border-gray-100 px-4">
                                <p className="font-normal w-3/4 py-1 text-[14px] leading-[18px]">
                                    {lead.market_niche}
                                </p>
                            </td>
                            <td className="border-b-[1px] w-1/12 border-gray-100 h-11 font-normal text-[16px] leading-[24px] text-dark-500 px-4">
                                <span>{lead.service}</span>
                            </td>
                            <td className="border-b-[1px] w-1/12 border-gray-100 h-11 font-normal text-[16px] leading-[24px] text-dark-500 px-4">
                                {lead.assigned_to}
                            </td>
                            <td className="h-11 border-b-[1px] w-1/12 border-gray-100 px-4">
                                <p className="font-normal w-3/4 py-1 text-[14px] leading-[18px] text-purple-primary-500 bg-purple-primary-100 rounded-md text-center px-2">
                                    {lead.status}
                                </p>
                            </td>
                            <td className="max-h-11 w-1/12 border-b-[1px] border-gray-100 px-4">
                                <div className="flex items-center gap-5">
                                    <img
                                        className="w-6 h-6 cursor-pointer"
                                        src="/src/assets/eyes.svg"
                                        alt="View"
                                        onClick={() => handleEditClick(lead)}
                                    />
                                    <img
                                        className="w-6 h-6 cursor-pointer"
                                        onClick={() => handleDelete(lead._id)}
                                        src="/src/assets/dustbin.svg"
                                        alt="Delete"
                                    />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex gap-2 items-center justify-between">
                <div className="flex items-center gap-2">
                    <p>Showing</p>
                    <Dropdown start="10" />
                </div>
                <div className="w-8/12">
                    <Pagination />
                </div>
            </div>

            {editModalOpen && editLead && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg relative">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                            onClick={() => setEditModalOpen(false)}
                        >
                            &times;
                        </button>
                        <h3 className="text-xl font-semibold mb-4">Edit Lead</h3>
                        <form onSubmit={handleEditSave} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Contact Person</label>
                                <input
                                    type="text"
                                    name="contact_person"
                                    value={editForm.contact_person || ""}
                                    onChange={handleEditInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                                <input
                                    type="text"
                                    name="contact_number"
                                    value={editForm.contact_number || ""}
                                    onChange={handleEditInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Market Niche</label>
                                <input
                                    type="text"
                                    name="market_niche"
                                    value={editForm.market_niche || ""}
                                    onChange={handleEditInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Service</label>
                                <input
                                    type="text"
                                    name="service"
                                    value={editForm.service || ""}
                                    onChange={handleEditInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Assigned To</label>
                                <input
                                    type="text"
                                    name="assigned_to"
                                    value={editForm.assigned_to || ""}
                                    onChange={handleEditInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Status</label>
                                <select
                                    name="status"
                                    value={editForm.status || ""}
                                    onChange={handleEditInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                >
                                    <option value="">Select Status</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Leads;
