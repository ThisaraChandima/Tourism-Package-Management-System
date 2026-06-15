export default function AdminTopNav() {
  return (
    <header className="bg-surface-container-lowest dark:bg-surface-container-low border-b border-outline-variant shadow-sm flex justify-between items-center w-full px-lg py-sm sticky top-0 z-10 h-[72px]">
      {/* Search */}
      <div className="flex-1 max-w-md relative focus-within:ring-2 focus-within:ring-primary rounded-lg transition-all">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
        <input 
          className="w-full bg-surface-container-low border border-outline-variant rounded-lg pl-10 pr-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:bg-surface-container-lowest transition-colors" 
          placeholder="Search packages, hotels, users..." 
          type="text"
        />
      </div>
      {/* Actions & Profile */}
      <div className="flex items-center gap-md">
        <button className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-error rounded-full border-2 border-surface-container-lowest"></span>
        </button>
        <button className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <div className="h-8 w-px bg-outline-variant mx-2"></div>
        <button className="flex items-center gap-sm hover:bg-surface-container-high p-1 rounded-full pr-3 transition-colors">
          <img 
            alt="User profile" 
            className="w-8 h-8 rounded-full border border-outline-variant object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiCx-HBJJpvmKtMs9RAhhdKKb8CqCOaMHAKd3yc9AEuusAek5BQ20bqLs26mYHBKscMZlc306Vw9JzSmC4InAFHnEBdq7iR2AKaCywj9TrQwd1unxpy5AXaWX6uQ3Qx1TczXIO5xchEyH_QUBrqI2szlItsoMuVJ2cemGatEEFN60oOF-hJccFWdwPf_u-MeZJgo6PG58Nb7o8IZkPyzPKa3d6aVaGRtXQZ8O8kQafvG9yMxvFfbOgr34NyxFMxMsjr-Xc9elq3Z8"
          />
          <span className="font-body-md text-body-md font-medium text-on-surface hidden md:block">Admin User</span>
          <span className="material-symbols-outlined text-on-surface-variant text-sm">expand_more</span>
        </button>
      </div>
    </header>
  );
}
