"use client";

import { useState, useEffect } from "react";

// Updated to match your pristine, simplified Prisma schema!
interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string; // Now mandatory!
  source: string;
  status: string;
  createdAt: string;
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [activeTab, setActiveTab] = useState<"NEW" | "PENDING" | "DONE">("NEW");
  const [isLoading, setIsLoading] = useState(true);

  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      if (data.success) {
        setLeads(data.leads);
      }
    } catch (error) {
      console.error("Failed to fetch leads", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === id ? { ...lead, status: newStatus } : lead))
    );

    try {
      await fetch("/api/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
    } catch (error) {
      console.error("Failed to update status", error);
      fetchLeads();
    }
  };

  const filteredLeads = leads.filter((lead) => lead.status === activeTab);

  if (isLoading) {
    return <div className="min-h-screen bg-bone flex items-center justify-center text-taupe font-bold">Loading CRM...</div>;
  }

  return (
    <div className="min-h-screen bg-bone p-4 md:p-8 font-sans">
      <div className="max-w-[1200px] mx-auto bg-white p-6 md:p-10 rounded-3xl shadow-xl ring-1 ring-taupe/20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-taupe/20 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-espresso tracking-tight">Leads CRM</h1>
            <p className="text-taupe mt-1">Manage and track your direct applications.</p>
          </div>
          <div className="bg-clay/10 text-clay px-4 py-2 rounded-xl font-bold text-sm">
            Total Leads: {leads.length}
          </div>
        </div>

        {/* The Pipeline Tabs */}
        <div className="flex gap-2 mb-8 bg-bone p-1.5 rounded-xl w-fit">
          <button
            onClick={() => setActiveTab("NEW")}
            className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 ${
              activeTab === "NEW" ? "bg-clay text-bone shadow-md" : "text-taupe hover:text-espresso hover:bg-taupe/10"
            }`}
          >
            New ({leads.filter(l => l.status === "NEW").length})
          </button>
          <button
            onClick={() => setActiveTab("PENDING")}
            className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 ${
              activeTab === "PENDING" ? "bg-clay text-bone shadow-md" : "text-taupe hover:text-espresso hover:bg-taupe/10"
            }`}
          >
            Pending ({leads.filter(l => l.status === "PENDING").length})
          </button>
          <button
            onClick={() => setActiveTab("DONE")}
            className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 ${
              activeTab === "DONE" ? "bg-clay text-bone shadow-md" : "text-taupe hover:text-espresso hover:bg-taupe/10"
            }`}
          >
            Done ({leads.filter(l => l.status === "DONE").length})
          </button>
        </div>

        {/* The Leads Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b-2 border-espresso text-espresso text-sm tracking-wide uppercase">
                <th className="pb-3 px-4 w-[15%]">Date</th>
                <th className="pb-3 px-4 w-[25%]">Name</th>
                <th className="pb-3 px-4 w-[30%]">Contact Info</th>
                <th className="pb-3 px-4 w-[15%]">Source</th>
                <th className="pb-3 px-4 w-[15%] text-right">Pipeline Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-taupe/10">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-bone/30 transition-colors">
                  <td className="p-4 text-sm text-taupe font-medium align-middle">
                    {new Date(lead.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </td>
                  <td className="p-4 align-middle">
                    <div className="font-bold text-espresso">{lead.firstName} {lead.lastName}</div>
                  </td>
                  <td className="p-4 align-middle">
                    <div className="text-sm font-bold text-espresso">{lead.email}</div>
                    <div className="text-sm text-taupe mt-0.5">{lead.phone}</div>
                  </td>
                  
                  <td className="p-4 align-middle">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      lead.source === 'OWNERS' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {lead.source}
                    </span>
                  </td>

                  {/* ACTION: Status Dropdown */}
                  <td className="p-4 align-middle text-right">
                    <select
                      value={lead.status}
                      onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                      className={`text-xs font-bold px-3 py-2 rounded-lg cursor-pointer outline-none ring-1 ring-taupe/20 transition-all ${
                        lead.status === "NEW" ? "bg-green-100 text-green-800 hover:bg-green-200" :
                        lead.status === "PENDING" ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200" :
                        "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                    >
                      <option value="NEW">● NEW</option>
                      <option value="PENDING">● PENDING</option>
                      <option value="DONE">● DONE</option>
                    </select>
                  </td>
                </tr>
              ))}

              {filteredLeads.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-12 text-center text-taupe font-medium">
                    No leads in the {activeTab} section right now.
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