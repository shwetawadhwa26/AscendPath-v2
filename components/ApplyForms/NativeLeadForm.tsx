"use client";

import { useState } from "react";

export default function NativeLeadForm({ source }: { source: "REPS" | "OWNERS" }) {
  const [status, setStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("SUBMITTING");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source }), 
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus("SUCCESS");
    } catch (error) {
      console.error(error);
      setStatus("ERROR");
    }
  };

  if (status === "SUCCESS") {
    return (
      <div className="bg-bone p-8 sm:p-12 rounded-2xl shadow-xl ring-1 ring-taupe/20 text-center max-w-7xl mx-auto w-full">
        <h3 className="text-3xl font-bold text-espresso mb-4">Application Received</h3>
        <p className="text-taupe text-lg">
          Thank you for applying. Our team will review your details and be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-bone p-6 sm:p-6 rounded-2xl shadow-xl ring-1 ring-espresso/20 max-w-4xl mx-auto text-left">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-espresso">Direct Application</h3>
        <p className="text-taupe text-sm mt-2">Fill out the secure form below to apply instantly.</p>
      </div>

      {status === "ERROR" && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg text-sm font-bold border border-red-200">
          Something went wrong. Please try again.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-bold text-espresso mb-2">First Name *</label>
          <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-white border border-taupe/30 rounded-xl px-4 py-3 text-espresso focus:outline-none focus:ring-2 focus:ring-clay" placeholder="John" />
        </div>
        <div>
          <label className="block text-sm font-bold text-espresso mb-2">Last Name *</label>
          <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-white border border-taupe/30 rounded-xl px-4 py-3 text-espresso focus:outline-none focus:ring-2 focus:ring-clay" placeholder="Doe" />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-bold text-espresso mb-2">Email Address *</label>
        <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white border border-taupe/30 rounded-xl px-4 py-3 text-espresso focus:outline-none focus:ring-2 focus:ring-clay" placeholder="john@example.com" />
      </div>

      <div className="mb-8">
        <label className="block text-sm font-bold text-espresso mb-2">Phone Number *</label>
        {/* Made phone required! */}
        <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white border border-taupe/30 rounded-xl px-4 py-3 text-espresso focus:outline-none focus:ring-2 focus:ring-clay" placeholder="+1 (555) 000-0000" />
      </div>

      <button type="submit" disabled={status === "SUBMITTING"} className="w-full bg-clay text-bone font-bold text-lg rounded-xl px-6 py-4 shadow-md hover:bg-clay/90 disabled:opacity-70 transition-all">
        {status === "SUBMITTING" ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}