export default function PackageBuilderPage() {
  return (
    <main className="flex-1 md:ml-sidebar-width h-full overflow-y-auto bg-surface-bright flex flex-col">
      {/* TopAppBar (Contextual for this task: Create Package) */}
      <header className="bg-surface-container-lowest border-b border-outline-variant sticky top-0 z-30 px-lg py-md flex justify-between items-center h-[72px]">
        <div className="flex items-center gap-md">
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="h-6 w-px bg-outline-variant"></div>
          <h2 className="font-title-lg text-title-lg text-on-surface">Create New Package</h2>
        </div>
        <div className="flex items-center gap-md">
          <button className="font-body-md text-body-md px-lg py-2 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors border border-transparent font-medium">
            Save Draft
          </button>
          <button className="bg-primary-container text-on-primary h-10 px-lg rounded-lg font-title-md text-title-md hover:opacity-90 transition-opacity shadow-sm flex items-center gap-sm">
            <span className="material-symbols-outlined text-[20px]">publish</span>
            Save & Publish Package
          </button>
        </div>
      </header>

      {/* Form Canvas */}
      <div className="p-lg md:p-xl max-w-container-max mx-auto w-full pb-2xl">
        {/* Package Header Details */}
        <section className="bg-surface-container-lowest rounded-xl p-lg shadow-sm mb-lg border border-outline-variant/50">
          <h3 className="font-title-lg text-title-lg text-on-surface mb-lg">Package Core Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8">
              <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Package Title</label>
              <input 
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm font-body-lg text-body-lg text-on-surface focus:outline-none focus:border-primary input-glow transition-all placeholder:text-outline" 
                placeholder="e.g., Highlights of Sri Lanka 7 Days" 
                type="text"
              />
            </div>
            <div className="md:col-span-4">
              <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Total Days</label>
              <div className="relative">
                <input 
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg pl-md pr-10 py-sm font-body-lg text-body-lg text-on-surface focus:outline-none focus:border-primary input-glow transition-all" 
                  min="1" 
                  placeholder="7" 
                  type="number"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant flex">
                  <span className="material-symbols-outlined">calendar_today</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary Builder Section */}
        <section>
          <div className="flex items-center justify-between mb-md">
            <h3 className="font-headline-md text-headline-md text-on-surface">Day-by-Day Itinerary Builder</h3>
            <span className="bg-surface-container-high text-on-surface-variant px-sm py-xs rounded text-sm font-medium">1 Day Configured</span>
          </div>

          {/* Day 1 Card */}
          <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.05)] border border-outline-variant/30 mb-md overflow-hidden relative group">
            {/* Accent Strip */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"></div>
            <div className="p-lg pl-[28px]">
              <div className="flex justify-between items-start mb-md pb-md border-b border-outline-variant/50">
                <div>
                  <h4 className="font-title-lg text-title-lg text-on-surface flex items-center gap-sm">
                    <span className="bg-secondary-container text-secondary font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                    Day 1 Setup
                  </h4>
                </div>
                <button className="text-outline hover:text-error transition-colors p-sm rounded-full hover:bg-error-container/20 flex">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
                {/* Covered Area */}
                <div className="space-y-xs">
                  <label className="block font-label-md text-label-md text-on-surface-variant">Covered Area / Destination</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-outline material-symbols-outlined flex">location_on</span>
                    <input 
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg pl-10 pr-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary input-glow transition-all" 
                      placeholder="e.g., Nuwara Eliya" 
                      type="text"
                    />
                  </div>
                </div>
                {/* Assigned Hotel */}
                <div className="space-y-xs">
                  <label className="block font-label-md text-label-md text-on-surface-variant">Assigned Hotel</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-outline material-symbols-outlined flex">hotel</span>
                    <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg pl-10 pr-10 py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary input-glow transition-all appearance-none defaultValue=''">
                      <option disabled value="">Select Hotel...</option>
                      <option value="h1">Grand Hotel Nuwara Eliya (5 Star)</option>
                      <option value="h2">Araliya Green Hills (4 Star)</option>
                      <option value="h3">Heritance Tea Factory (Luxury)</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-outline material-symbols-outlined pointer-events-none flex">expand_more</span>
                  </div>
                </div>
                {/* Assigned Vehicle */}
                <div className="space-y-xs">
                  <label className="block font-label-md text-label-md text-on-surface-variant">Assigned Vehicle Class</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-outline material-symbols-outlined flex">directions_car</span>
                    <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg pl-10 pr-10 py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary input-glow transition-all appearance-none defaultValue=''">
                      <option disabled value="">Select Vehicle...</option>
                      <option value="v1">Luxury Sedan (2-3 Pax)</option>
                      <option value="v2">Premium SUV (4-5 Pax)</option>
                      <option value="v3">Mini Van (6-9 Pax)</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-outline material-symbols-outlined pointer-events-none flex">expand_more</span>
                  </div>
                </div>
              </div>
              {/* Add Activities optional area */}
              <div className="mt-md pt-md border-t border-outline-variant/30 border-dashed">
                <button className="text-primary hover:text-primary-container font-title-md text-title-md flex items-center gap-xs text-sm transition-colors">
                  <span className="material-symbols-outlined text-[18px]">add_circle</span>
                  Add Specific Activities / Notes for Day 1
                </button>
              </div>
            </div>
          </div>

          {/* Add Another Day Button */}
          <button className="w-full border-2 border-dashed border-outline hover:border-primary bg-transparent hover:bg-surface-container-lowest text-on-surface-variant hover:text-primary rounded-xl py-lg font-title-md text-title-md flex items-center justify-center gap-sm transition-all group">
            <div className="bg-surface-container-high group-hover:bg-primary-container text-outline group-hover:text-on-primary-container rounded-full w-8 h-8 flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined flex">add</span>
            </div>
            + Add Another Day
          </button>
        </section>
      </div>
    </main>
  );
}
