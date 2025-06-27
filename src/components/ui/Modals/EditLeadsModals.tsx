// import axios from "axios";

// function EditLeadsModals() {
//     const [editModalOpen, setEditModalOpen] = useState(false);
//     const [editLead, setEditLead] = useState<Lead | null>(null);
//     const [editForm, setEditForm] = useState<Partial<Lead>>({});
//     const handleEditClick = (lead: Lead) => {
//         setEditLead(lead);
//         setEditForm(lead);
//         setEditModalOpen(true);
//     };

//     const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//         const { name, value } = e.target;
//         setEditForm((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleEditSave = async (e: React.FormEvent) => {
//         e.preventDefault();
//         if (!editLead) return;
//         try {
//             await axios.patch(
//                 `http://localhost:3001/hr/leads/${editLead._id}`,
//                 editForm,
//                 { withCredentials: true }
//             );
//             alert("Lead updated successfully");
//             setEditModalOpen(false);
//             setEditLead(null);
//             onLeadsUpdated && onLeadsUpdated();
//         } catch (error) {
//             alert("Failed to update lead");
//         }
//     };
//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg relative">
//                 <button
//                     className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
//                     onClick={() => setEditModalOpen(false)}
//                 >
//                     &times;
//                 </button>
//                 <h3 className="text-xl font-semibold mb-4">Edit Lead</h3>
//                 <form onSubmit={handleEditSave} className="space-y-4">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Contact Person</label>
//                         <input
//                             type="text"
//                             name="contact_person"
//                             value={editForm.contact_person || ""}
//                             onChange={handleEditInputChange}
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Contact Number</label>
//                         <input
//                             type="text"
//                             name="contact_number"
//                             value={editForm.contact_number || ""}
//                             onChange={handleEditInputChange}
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Market Niche</label>
//                         <input
//                             type="text"
//                             name="market_niche"
//                             value={editForm.market_niche || ""}
//                             onChange={handleEditInputChange}
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Service</label>
//                         <input
//                             type="text"
//                             name="service"
//                             value={editForm.service || ""}
//                             onChange={handleEditInputChange}
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Assigned To</label>
//                         <input
//                             type="text"
//                             name="assigned_to"
//                             value={editForm.assigned_to || ""}
//                             onChange={handleEditInputChange}
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Status</label>
//                         <select
//                             name="status"
//                             value={editForm.status || ""}
//                             onChange={handleEditInputChange}
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                         >
//                             <option value="">Select Status</option>
//                             <option value="pending">Pending</option>
//                             <option value="completed">Completed</option>
//                         </select>
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//                     >
//                         Save Changes
//                     </button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default EditLeadsModals