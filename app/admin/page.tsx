import Link from "next/link";

export default function AdminHub() {
  return (
    <div className="min-h-screen bg-bone pt-32 pb-16 px-4 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Hub Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-espresso tracking-tight">
            Admin Dashboard
          </h1>
          <p className="text-taupe mt-4 text-lg font-medium">
            Select a module below to manage your website data and leads.
          </p>
        </div>

        {/* The "Tabs" / Module Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 1. Testimonials Manager */}
          <Link 
            href="/admin/testimonials" 
            className="group bg-white p-10 rounded-3xl shadow-lg ring-1 ring-taupe/20 hover:shadow-2xl hover:ring-clay transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="h-20 w-20 bg-clay/10 text-clay rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-clay group-hover:text-bone transition-all duration-300">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-espresso mb-3">Testimonials</h2>
            <p className="text-taupe text-sm leading-relaxed">
              Upload, edit, and feature your video and WhatsApp text reviews across your landing pages.
            </p>
            <div className="mt-8 text-clay font-bold text-sm tracking-widest uppercase flex items-center gap-2 group-hover:translate-x-2 transition-transform">
              Open Manager <span aria-hidden="true">&rarr;</span>
            </div>
          </Link>

          {/* 2. Backup Leads Viewer */}
          <Link 
            href="/admin/leads" 
            className="group bg-white p-10 rounded-3xl shadow-lg ring-1 ring-taupe/20 hover:shadow-2xl hover:ring-clay transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="h-20 w-20 bg-clay/10 text-clay rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-clay group-hover:text-bone transition-all duration-300">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-espresso mb-3">Backup Leads</h2>
            <p className="text-taupe text-sm leading-relaxed">
              View direct application submissions captured by the native website form.
            </p>
            <div className="mt-8 text-clay font-bold text-sm tracking-widest uppercase flex items-center gap-2 group-hover:translate-x-2 transition-transform">
              View Leads <span aria-hidden="true">&rarr;</span>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}