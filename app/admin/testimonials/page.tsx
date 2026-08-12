"use client";

import { useState, useEffect } from "react";

// The shape of our data
interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  tier: string;
  category: string;
  type: string;
  videoUrl?: string;
}

export default function AdminTestimonialsPage() {
  const [existingData, setExistingData] = useState<Testimonial[]>([]);
  const [drafts, setDrafts] = useState<Testimonial[]>([]);
  const [status, setStatus] = useState<"IDLE" | "LOADING" | "SUCCESS" | "ERROR">("LOADING");
  const [validationErrors, setValidationErrors] = useState<number[]>([]);

  // Fetch the existing testimonials on load
  const fetchData = async () => {
    try {
      const res = await fetch("/api/testimonials");
      const data = await res.json();
      if (data.success) {
        setExistingData(data.testimonials);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setStatus("IDLE");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Adds a blank row to our "drafts" array
  const handleAddRow = () => {
    setDrafts([
      ...drafts,
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "",
        title: "",
        quote: "",
        tier: "",
        category: "REPS",
        type: "TEXT",
        videoUrl: "",
      },
    ]);
  };

  // Updates a specific field in a specific draft row
  const handleDraftChange = (index: number, field: keyof Testimonial, value: string) => {
    const updatedDrafts = [...drafts];
    updatedDrafts[index] = { ...updatedDrafts[index], [field]: value };
    setDrafts(updatedDrafts);
  };

  // 1. NEW: Added confirmation prompt for Drafts!
  const handleRemoveDraft = (index: number) => {
    const confirmed = window.confirm("Are you sure you want to remove this row? Any text you typed will be lost.");
    if (!confirmed) return;

    const updatedDrafts = drafts.filter((_, i) => i !== index);
    setDrafts(updatedDrafts);
    setValidationErrors(validationErrors.filter((i) => i !== index));
  };

  // 2. NEW: Already has confirmation for Database records
  const handleDeleteExisting = async (id: string) => {
    const confirmed = window.confirm("Are you sure you want to permanently delete this testimonial from the database?");
    if (!confirmed) return;

    try {
      const res = await fetch(`/api/testimonials?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setExistingData((prev) => prev.filter((item) => item.id !== id));
      } else {
        alert("Failed to delete testimonial.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while deleting.");
    }
  };

  // The Bulk Upload Logic
  const handleBulkSave = async () => {
    const errors: number[] = [];
    drafts.forEach((draft, index) => {
      // Require Name, Title, and either Quote (if TEXT) or VideoUrl (if VIDEO)
      if (
        !draft.name.trim() ||
        !draft.title.trim() ||
        (draft.type === "TEXT" && !draft.quote.trim()) ||
        (draft.type === "VIDEO" && !draft.videoUrl?.trim())
      ) {
        errors.push(index);
      }
    });

    if (errors.length > 0) {
      setValidationErrors(errors);
      alert("Please fill out all required fields (Name, Title, and Content) for the highlighted rows.");
      return;
    }

    setStatus("LOADING");
    setValidationErrors([]);

    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(drafts.map(({ id, ...rest }) => rest)), 
      });

      if (!res.ok) throw new Error("Failed to save");

      setDrafts([]);
      await fetchData(); 
      setStatus("SUCCESS");

      setTimeout(() => setStatus("IDLE"), 3000);
    } catch (error) {
      console.error(error);
      setStatus("ERROR");
    }
  };

  if (status === "LOADING" && existingData.length === 0) {
    return <div className="p-10 text-center text-taupe">Loading database...</div>;
  }

  return (
    <div className="min-h-screen bg-bone p-4 md:p-8 font-sans">
      <div className="max-w-[1400px] mx-auto bg-white p-6 md:p-10 rounded-3xl shadow-xl ring-1 ring-taupe/20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-taupe/20 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-espresso tracking-tight">Testimonials Manager</h1>
            <p className="text-taupe mt-1">Bulk upload and edit reviews for your landing pages.</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleAddRow}
              className="bg-taupe/10 text-espresso px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-taupe/20 transition-colors"
            >
              + Add New Row
            </button>
            <button
              onClick={handleBulkSave}
              disabled={drafts.length === 0 || status === "LOADING"}
              className="bg-clay text-bone px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-clay/90 transition-colors disabled:opacity-50"
            >
              {status === "LOADING" ? "Saving..." : "Save All"}
            </button>
          </div>
        </div>

        {status === "SUCCESS" && (
          <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg text-sm font-bold border border-green-200">
            Successfully saved all testimonials!
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1100px]">
            <thead>
              <tr className="border-b-2 border-espresso text-espresso text-sm tracking-wide uppercase">
                <th className="pb-3 px-4 w-[10%]">Category</th>
                <th className="pb-3 px-4 w-[10%]">Type</th>
                <th className="pb-3 px-4 w-[15%]">Author Name</th>
                <th className="pb-3 px-4 w-[15%]">Job Title</th>
                <th className="pb-3 px-4 w-[15%]">Highlight Tag</th>
                <th className="pb-3 px-4 w-[30%]">Content (Quote or AWS Link)</th>
                <th className="pb-3 px-4 w-[5%] text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-taupe/10">
              
              {/* DRAFTS (Editable Rows) */}
              {drafts.map((draft, index) => {
                const hasError = validationErrors.includes(index);
                return (
                  <tr key={draft.id} className={`${hasError ? "bg-red-50/50" : "bg-clay/5"} transition-colors`}>
                    <td className="p-2">
                      <select
                        value={draft.category}
                        onChange={(e) => handleDraftChange(index, "category", e.target.value)}
                        className="w-full bg-white border border-taupe/30 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-clay outline-none"
                      >
                        <option value="REPS">Sales Reps</option>
                        <option value="OWNERS">Business Owners</option>
                      </select>
                    </td>
                    <td className="p-2">
                      <select
                        value={draft.type}
                        onChange={(e) => handleDraftChange(index, "type", e.target.value)}
                        className="w-full bg-white border border-taupe/30 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-clay outline-none"
                      >
                        <option value="TEXT">WhatsApp (Text)</option>
                        <option value="VIDEO">AWS S3 (Video)</option>
                      </select>
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={draft.name}
                        onChange={(e) => handleDraftChange(index, "name", e.target.value)}
                        className={`w-full bg-white border ${hasError && !draft.name ? "border-red-500 ring-1 ring-red-500" : "border-taupe/30"} rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-clay outline-none`}
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        placeholder="Founder"
                        value={draft.title}
                        onChange={(e) => handleDraftChange(index, "title", e.target.value)}
                        className={`w-full bg-white border ${hasError && !draft.title ? "border-red-500 ring-1 ring-red-500" : "border-taupe/30"} rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-clay outline-none`}
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        placeholder="$68K YTD (Optional)"
                        value={draft.tier}
                        onChange={(e) => handleDraftChange(index, "tier", e.target.value)}
                        className="w-full bg-white border border-taupe/30 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-clay outline-none"
                      />
                    </td>
                    <td className="p-2">
                      {draft.type === "TEXT" ? (
                        <textarea
                          placeholder="Paste WhatsApp review here..."
                          rows={1}
                          value={draft.quote}
                          onChange={(e) => handleDraftChange(index, "quote", e.target.value)}
                          className={`w-full bg-white border ${hasError && !draft.quote ? "border-red-500 ring-1 ring-red-500" : "border-taupe/30"} rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-clay outline-none resize-y min-h-[42px]`}
                        />
                      ) : (
                        <input
                          type="url"
                          placeholder="https://...cloudfront.net/...mp4"
                          value={draft.videoUrl || ""}
                          onChange={(e) => handleDraftChange(index, "videoUrl", e.target.value)}
                          className={`w-full bg-white border ${hasError && !draft.videoUrl ? "border-red-500 ring-1 ring-red-500" : "border-taupe/30"} rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-clay outline-none`}
                        />
                      )}
                    </td>
                    <td className="p-2 text-center">
                      {/* 3. NEW: The unified ✕ cross sign for Drafts */}
                      <button onClick={() => handleRemoveDraft(index)} className="text-red-500 font-bold hover:text-red-700 text-sm">
                        ✕
                      </button>
                    </td>
                  </tr>
                );
              })}

              {/* EXISTING DATA (Read Only) */}
              {existingData.map((item) => (
                <tr key={item.id} className="hover:bg-bone/30 transition-colors">
                  <td className="p-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      item.category === 'OWNERS' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {item.category}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-800">
                      {item.type}
                    </span>
                  </td>
                  <td className="p-4 font-bold text-espresso text-sm">{item.name}</td>
                  <td className="p-4 text-sm text-espresso">{item.title}</td>
                  <td className="p-4 text-sm font-medium text-clay">{item.tier || "-"}</td>
                  <td className="p-4 text-sm text-taupe truncate max-w-[300px]">
                    {item.type === "TEXT" ? item.quote : <a href={item.videoUrl} target="_blank" className="text-clay underline">View AWS Video</a>}
                  </td>
                  <td className="p-4 text-center">
                    {/* 4. NEW: The unified ✕ cross sign for Database Rows */}
                    <button 
                      onClick={() => handleDeleteExisting(item.id)} 
                      className="text-red-500 font-bold hover:text-red-700 text-sm"
                      title="Permanently Delete Testimonial"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}

              {existingData.length === 0 && drafts.length === 0 && (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-taupe font-medium">
                    No testimonials uploaded yet. Click "+ Add New Row" to start!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}




// "use client";

// import { useState, useEffect } from "react";

// // The shape of our data
// interface Testimonial {
//   id: string;
//   name: string;
//   title: string;
//   quote: string;
//   tier: string;
//   category: string;
//   type: string; // "TEXT" or "VIDEO"
//   videoUrl?: string; 
// }

// export default function AdminTestimonialsPage() {
//   const [existingData, setExistingData] = useState<Testimonial[]>([]);
//   const [drafts, setDrafts] = useState<Testimonial[]>([]);
//   const [status, setStatus] = useState<"IDLE" | "LOADING" | "SUCCESS" | "ERROR">("LOADING");
//   const [validationErrors, setValidationErrors] = useState<number[]>([]); 

//   // Fetch the existing testimonials on load
//   const fetchData = async () => {
//     try {
//       const res = await fetch("/api/testimonials");
//       const data = await res.json();
//       if (data.success) {
//         setExistingData(data.testimonials);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setStatus("IDLE");
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // Adds a blank row to our "drafts" array
//   const handleAddRow = () => {
//     setDrafts([
//       ...drafts,
//       {
//         id: Math.random().toString(36).substr(2, 9),
//         name: "",
//         title: "",
//         quote: "",
//         tier: "",
//         category: "REPS",
//         type: "TEXT", 
//         videoUrl: "", 
//       },
//     ]);
//   };

//   // Updates a specific field in a specific draft row
//   const handleDraftChange = (index: number, field: keyof Testimonial, value: string) => {
//     const updatedDrafts = [...drafts];
//     updatedDrafts[index] = { ...updatedDrafts[index], [field]: value };
//     setDrafts(updatedDrafts);
    
//     if (validationErrors.includes(index)) {
//       setValidationErrors(validationErrors.filter((i) => i !== index));
//     }
//   };

//   // Removes a draft row if the user changes their mind
//   const handleRemoveDraft = (index: number) => {
//     const updatedDrafts = drafts.filter((_, i) => i !== index);
//     setDrafts(updatedDrafts);
//     setValidationErrors(validationErrors.filter((i) => i !== index));
//   };

//   // The Bulk Upload Logic
//   const handleBulkSave = async () => {
//     // Smart Validation: Checks for Quote if TEXT, checks for videoUrl if VIDEO
//     const errors: number[] = [];
//     drafts.forEach((draft, index) => {
//       if (!draft.name.trim() || !draft.title.trim()) {
//         errors.push(index);
//       } else if (draft.type === "TEXT" && !draft.quote.trim()) {
//         errors.push(index);
//       } else if (draft.type === "VIDEO" && !draft.videoUrl?.trim()) {
//         errors.push(index);
//       }
//     });

//     if (errors.length > 0) {
//       setValidationErrors(errors);
//       return; 
//     }

//     setStatus("LOADING");
//     try {
//       const payload = drafts.map(({ id, ...rest }) => ({
//         ...rest,
//         isFeatured: false,
//       }));
      
//       const response = await fetch("/api/testimonials", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) throw new Error("Failed to save");

//       setDrafts([]);
//       setStatus("SUCCESS");
//       fetchData(); 
      
//       setTimeout(() => setStatus("IDLE"), 3000);
//     } catch (error) {
//       console.error(error);
//       setStatus("ERROR");
//     }
//   };

//   if (status === "LOADING" && existingData.length === 0) {
//     return <div className="min-h-screen bg-bone flex items-center justify-center font-bold text-taupe">Loading database...</div>;
//   }

//   return (
//     <div className="min-h-screen bg-bone p-4 md:p-8 font-sans">
//       <div className="max-w-[1400px] mx-auto bg-white p-6 md:p-10 rounded-3xl shadow-xl ring-1 ring-taupe/20">
        
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-taupe/20 gap-4">
//           <div>
//             <h1 className="text-3xl font-bold text-espresso tracking-tight">Testimonials Admin</h1>
//             <p className="text-taupe mt-1">Manage and bulk-upload reviews directly to AWS.</p>
//           </div>
//           <div className="flex items-center gap-4">
//             <button
//               onClick={handleAddRow}
//               className="bg-clay/10 text-clay hover:bg-clay/20 px-5 py-2.5 rounded-xl font-bold transition-colors"
//             >
//               + Add Row
//             </button>
//             <button
//               onClick={handleBulkSave}
//               disabled={drafts.length === 0 || status === "LOADING"}
//               className="bg-espresso text-bone px-8 py-2.5 rounded-xl font-bold hover:bg-espresso/90 disabled:opacity-50 transition-all"
//             >
//               {status === "LOADING" ? "Saving..." : "Save All"}
//             </button>
//           </div>
//         </div>

//         {/* Status Messages */}
//         {status === "SUCCESS" && (
//           <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl text-sm font-bold">
//             ✅ Successfully bulk-uploaded to AWS!
//           </div>
//         )}
//         {validationErrors.length > 0 && (
//           <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl text-sm font-bold">
//             ⚠️ Please fill out all required fields (Name, Title, and Content) for the highlighted rows.
//           </div>
//         )}

//         {/* The Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse min-w-[1000px]">
//             <thead>
//               <tr className="border-b-2 border-espresso text-espresso text-sm tracking-wide">
//                 <th className="pb-3 px-4 w-[12%]">Category</th>
//                 <th className="pb-3 px-4 w-[12%]">Format</th>
//                 <th className="pb-3 px-4 w-[15%]">Name *</th>
//                 <th className="pb-3 px-4 w-[15%]">Title *</th>
//                 <th className="pb-3 px-4 w-[30%]">Content (Quote or S3 Link) *</th>
//                 <th className="pb-3 px-4 w-[12%]">Tag</th>
//                 <th className="pb-3 px-4 w-[4%]"></th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-taupe/10">
              
//               {/* 1. DRAFT ROWS (Editable) */}
//               {drafts.map((draft, index) => {
//                 const isError = validationErrors.includes(index);
//                 return (
//                   <tr key={draft.id} className={`bg-clay/5 ${isError ? 'ring-2 ring-red-400 inset-0 relative z-10' : ''}`}>
//                     <td className="p-4">
//                       <select
//                         value={draft.category}
//                         onChange={(e) => handleDraftChange(index, "category", e.target.value)}
//                         className="w-full p-2 rounded-md border border-taupe/30 focus:outline-none focus:ring-1 focus:ring-clay text-sm"
//                       >
//                         <option value="REPS">Sales Reps</option>
//                         <option value="OWNERS">Owners</option>
//                       </select>
//                     </td>
//                     <td className="p-4">
//                       <select
//                          value={draft.type}
//                          onChange={(e) => handleDraftChange(index, "type", e.target.value)}
//                          className="w-full p-2 rounded-md border border-taupe/30 text-sm focus:outline-none focus:ring-1 focus:ring-clay"
//                       >
//                          <option value="TEXT">Text</option>
//                          <option value="VIDEO">Video</option>
//                       </select>
//                     </td>
//                     <td className="p-4">
//                       <input
//                         type="text"
//                         placeholder="John Doe"
//                         value={draft.name}
//                         onChange={(e) => handleDraftChange(index, "name", e.target.value)}
//                         className="w-full p-2 rounded-md border border-taupe/30 focus:outline-none focus:ring-1 focus:ring-clay text-sm"
//                       />
//                     </td>
//                     <td className="p-4">
//                       <input
//                         type="text"
//                         placeholder="Founder"
//                         value={draft.title}
//                         onChange={(e) => handleDraftChange(index, "title", e.target.value)}
//                         className="w-full p-2 rounded-md border border-taupe/30 focus:outline-none focus:ring-1 focus:ring-clay text-sm"
//                       />
//                     </td>
//                     <td className="p-4">
//                       {/* Smart Toggle: Show textarea for TEXT, input for VIDEO */}
//                       {draft.type === "TEXT" ? (
//                          <textarea
//                            rows={2}
//                            placeholder="Paste WhatsApp text..."
//                            value={draft.quote}
//                            onChange={(e) => handleDraftChange(index, "quote", e.target.value)}
//                            className="w-full p-2 rounded-md border border-taupe/30 focus:outline-none focus:ring-1 focus:ring-clay text-sm resize-y"
//                          />
//                       ) : (
//                          <div className="flex flex-col gap-2">
//                              <input
//                                type="text"
//                                placeholder="AWS S3 Video Link..."
//                                value={draft.videoUrl || ""}
//                                onChange={(e) => handleDraftChange(index, "videoUrl", e.target.value)}
//                                className="w-full p-2 rounded-md border border-taupe/30 focus:outline-none focus:ring-1 focus:ring-clay text-sm"
//                              />
//                              <input
//                                type="text"
//                                placeholder="Optional short quote..."
//                                value={draft.quote}
//                                onChange={(e) => handleDraftChange(index, "quote", e.target.value)}
//                                className="w-full p-2 rounded-md border border-taupe/30 focus:outline-none focus:ring-1 focus:ring-clay text-sm"
//                              />
//                          </div>
//                       )}
//                     </td>
//                     <td className="p-4">
//                       <input
//                         type="text"
//                         placeholder="e.g. $50k/mo"
//                         value={draft.tier}
//                         onChange={(e) => handleDraftChange(index, "tier", e.target.value)}
//                         className="w-full p-2 rounded-md border border-taupe/30 focus:outline-none focus:ring-1 focus:ring-clay text-sm"
//                       />
//                     </td>
//                     <td className="p-4 text-center">
//                       <button onClick={() => handleRemoveDraft(index)} className="text-red-500 hover:text-red-700 font-bold" title="Remove Row">
//                         ✕
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}

//               {/* 2. EXISTING DB ROWS (Read-Only) */}
//               {existingData.map((item) => (
//                 <tr key={item.id} className="hover:bg-bone/30 transition-colors">
//                   <td className="p-4">
//                     <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.category === 'REPS' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
//                       {item.category}
//                     </span>
//                   </td>
//                   <td className="p-4">
//                     <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.type === 'VIDEO' ? 'bg-red-100 text-red-800' : 'bg-gray-200 text-gray-800'}`}>
//                       {item.type}
//                     </span>
//                   </td>
//                   <td className="p-4 font-medium text-espresso text-sm">{item.name}</td>
//                   <td className="p-4 text-taupe text-sm">{item.title}</td>
//                   <td className="p-4 text-espresso text-sm">
//                     {item.type === "VIDEO" ? (
//                       <a href={item.videoUrl} target="_blank" className="text-clay underline line-clamp-1">View Video Link</a>
//                     ) : (
//                       <p className="line-clamp-2">{item.quote}</p>
//                     )}
//                   </td>
//                   <td className="p-4 text-clay font-bold text-xs">{item.tier || "-"}</td>
//                   <td className="p-4 text-center text-taupe/40 text-xs">DB</td>
//                 </tr>
//               ))}
              
//               {existingData.length === 0 && drafts.length === 0 && (
//                 <tr>
//                   <td colSpan={7} className="p-8 text-center text-taupe">
//                     No testimonials found. Click "+ Add Row" to start adding data!
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";

// export default function AdminTestimonialsPage() {
//   const [status, setStatus] = useState<"IDLE" | "LOADING" | "SUCCESS" | "ERROR">("IDLE");
  
//   const [formData, setFormData] = useState({
//     name: "",
//     title: "",
//     quote: "",
//     tier: "",
//     category: "REPS", // Default to the Reps page
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus("LOADING");

//     try {
//       const response = await fetch("/api/testimonials", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...formData,
//           type: "TEXT", // Hardcoding to TEXT for these WhatsApp reviews
//           isFeatured: false, 
//         }),
//       });

//       if (!response.ok) throw new Error("Failed to save");

//       setStatus("SUCCESS");
//       // Reset the form after 2 seconds so you can add another one easily
//       setTimeout(() => {
//         setStatus("IDLE");
//         setFormData({ name: "", title: "", quote: "", tier: "", category: "REPS" });
//       }, 2000);

//     } catch (error) {
//       console.error(error);
//       setStatus("ERROR");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-bone p-8 md:p-24 font-sans">
//       <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl ring-1 ring-taupe/20">
        
//         <div className="mb-10 border-b border-taupe/20 pb-6">
//           <h1 className="text-3xl font-bold text-espresso tracking-tight mb-2">
//             Testimonial Admin
//           </h1>
//           <p className="text-taupe">Upload new WhatsApp reviews to the database.</p>
//         </div>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-bold text-espresso">Client Name</label>
//               <input
//                 required
//                 type="text"
//                 placeholder="e.g. Tim Stoddart"
//                 className="p-3 rounded-lg border border-taupe/30 bg-bone/50 focus:outline-none focus:ring-2 focus:ring-clay"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               />
//             </div>

//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-bold text-espresso">Title / Role</label>
//               <input
//                 required
//                 type="text"
//                 placeholder="e.g. Founder - Media"
//                 className="p-3 rounded-lg border border-taupe/30 bg-bone/50 focus:outline-none focus:ring-2 focus:ring-clay"
//                 value={formData.title}
//                 onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//               />
//             </div>
//           </div>

//           <div className="flex flex-col gap-2">
//             <label className="text-sm font-bold text-espresso">The Quote (WhatsApp Text)</label>
//             <textarea
//               required
//               rows={4}
//               placeholder="Paste the exact text here..."
//               className="p-3 rounded-lg border border-taupe/30 bg-bone/50 focus:outline-none focus:ring-2 focus:ring-clay resize-y"
//               value={formData.quote}
//               onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-bold text-espresso">Highlight Tag (Optional)</label>
//               <input
//                 type="text"
//                 placeholder="e.g. $68K YTD"
//                 className="p-3 rounded-lg border border-taupe/30 bg-bone/50 focus:outline-none focus:ring-2 focus:ring-clay"
//                 value={formData.tier}
//                 onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
//               />
//             </div>

//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-bold text-espresso">Category (Which page?)</label>
//               <select
//                 className="p-3 rounded-lg border border-taupe/30 bg-bone/50 focus:outline-none focus:ring-2 focus:ring-clay appearance-none"
//                 value={formData.category}
//                 onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//               >
//                 <option value="REPS">Sales Reps Page</option>
//                 <option value="OWNERS">Business Owners Page</option>
//               </select>
//             </div>
//           </div>

//           <button
//             type="submit"
//             disabled={status === "LOADING"}
//             className="mt-4 bg-espresso text-bone font-bold text-lg py-4 rounded-xl hover:bg-espresso/90 transition-all disabled:opacity-50"
//           >
//             {status === "LOADING" ? "Saving to AWS..." : "Upload Testimonial"}
//           </button>

//           {status === "SUCCESS" && (
//             <div className="p-4 bg-green-100 text-green-800 rounded-xl text-center font-bold">
//               ✅ Successfully saved to the database!
//             </div>
//           )}

//           {status === "ERROR" && (
//             <div className="p-4 bg-red-100 text-red-800 rounded-xl text-center font-bold">
//               ❌ Failed to save. Check your terminal.
//             </div>
//           )}
//         </form>

//       </div>
//     </div>
//   );
// }