import Dropdown from "../Common/Dropdown";
import Pagination from "../Common/Pagination";
import axios from "axios";

type Lead = {
    _id: string;
    contact_person: string;
    contact_number: string;
    market_niche: string;
    service: string;
    assigned_to: string;
    status: string;
};

type LeadsProps = {
    headings: string[];
    leads: Lead[];
};

const Leads: React.FC<LeadsProps> = ({ headings, leads }) => {
    const handleDelete = async (id: string) => {
        const confirmDelete = confirm("Are you sure you want to delete this lead?");
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:3001/hr/leads/${id}`, {
                    withCredentials: true,
                });
                alert("Lead deleted successfully");
            } catch (error) {
                console.error("Error deleting lead:", error);
                alert("Failed to delete lead");
            }
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
                                    <img className="w-6 h-6 cursor-pointer" src="/src/assets/eyes.svg" alt="View" />
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
        </div>
    );
};

export default Leads;
