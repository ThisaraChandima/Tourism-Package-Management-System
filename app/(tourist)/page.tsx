import Link from "next/link";

export default function TouristHomePage() {
  return (
    <main className="flex-grow flex flex-col md:pt-2xl">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAwRifa51yG8CgyGvT2Ky4yFiP1U5H8u2GsBwsMt7bpbaBK4Ll73Fy_gu3B22_1XxUGM5nt9JzlFXxcEvojBpNeVAX2av72CE74-hPU2cZSTBAdP08xrVDMEG1PmlfU6mg_vDnXOPgUzyDJXGDCb7QonqsoECttQhPKp5FbxS9IO4qWrRFgs0rtzNGbRVH7zotd-kdjXgZmp5gfZUqVTNFGEPmyg8HrsdT3TMwB-tNbuz1gR5f9UPD-CIIfocG9AdW9mFrXhcKGbzI')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-container-max mx-auto px-lg w-full flex flex-col items-center text-center mt-12 md:mt-0">
          <h1 className="font-display-lg text-display-lg text-white mb-6 drop-shadow-lg">Discover Your Next Adventure</h1>
          <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mb-8 drop-shadow-md hidden md:block">
            Explore curated travel packages, breathtaking destinations, and unforgettable experiences.
          </p>
          
          {/* Search Bar */}
          <div className="w-full max-w-2xl bg-surface-container-lowest rounded-xl p-2 flex flex-col sm:flex-row gap-2 shadow-lg">
            <div className="flex-1 relative flex items-center bg-surface-container-low rounded-lg px-4 h-12">
              <span className="material-symbols-outlined text-outline mr-2 flex">search</span>
              <input type="text" placeholder="Where do you want to go?" className="bg-transparent border-none focus:ring-0 w-full h-full font-body-md text-on-surface" />
            </div>
            <button className="bg-primary text-on-primary h-12 px-8 rounded-lg font-title-md text-title-md hover:bg-primary-container transition-colors shadow-sm active:scale-95 flex items-center justify-center">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Popular Packages Section */}
      <section className="max-w-container-max mx-auto w-full px-lg py-xl md:py-2xl">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 text-center">Popular Packages</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Package Card 1 */}
          <Link href="/package/1" className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant shadow-sm hover:shadow-md transition-all group">
            <div className="h-48 w-full bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBll71RGQzgie67_8g4yAc3WcUeGu0LeMGNxtJGSMSUSy0hCtsZa5U-4v-kOpm2AkRI1fUYZiaW5hzYEZ9YZKGf1-yHhSQHfFvlz6gdokCTfXlNrYq1ceoZF9-TF3rLUlkK1zeAzBy2t792xJ2EwIfxt7DRZWkJz5h0pe1YtuawZJbZ5tmliiKwaejgiv8JHPYA_gbN41jX2rVV--C31-Xl7UAYZRjEounQagknN5nGWGhjLfn-QB9xXacawmC_NAbu0g3DZ1Tcaqk')" }}>
              <div className="w-full h-full bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-title-lg text-title-lg text-on-surface group-hover:text-primary transition-colors">3-Day Mountain Explorer</h3>
                <span className="font-title-md text-title-md text-primary font-bold">$850</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mb-4">
                Escape the city and dive deep into nature with our meticulously planned 3-day mountain exploration.
              </p>
              <div className="flex items-center gap-4 text-on-surface-variant font-label-md">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined flex" style={{ fontSize: '18px' }}>schedule</span>
                  3 Days
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined flex" style={{ fontSize: '18px' }}>star</span>
                  4.9
                </div>
              </div>
            </div>
          </Link>

          {/* Package Card 2 */}
          <Link href="/package/2" className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant shadow-sm hover:shadow-md transition-all group">
            <div className="h-48 w-full bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7gz4uvHlESFy18hRrB9WideWXhiflDwr5-LeRS4ts7A8vmFhanvJGciiSg8yWYoc2_yjwwjN9NO3kDRyZ-OtwCn3OOfmCwjhTVNmKeU5dsmy0Xqjq39omCtugzV27ao9x3qtlhFV287ftr0QCCjJDaUDbqSTfGJpkffz1Ikp17ZJM5WCftP-SHbrsBL6sFr3fV_Mt1J0XKQ52Knby4ysvGB0_dG5DHe77F7edAjte7Ib9Fpm2HXfP5r786EOaUZ1Z_Tf9yvYlR_k')" }}>
              <div className="w-full h-full bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-title-lg text-title-lg text-on-surface group-hover:text-primary transition-colors">7-Day Island Retreat</h3>
                <span className="font-title-md text-title-md text-primary font-bold">$1,200</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mb-4">
                Experience pristine beaches and crystal clear waters on a luxurious week-long getaway.
              </p>
              <div className="flex items-center gap-4 text-on-surface-variant font-label-md">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined flex" style={{ fontSize: '18px' }}>schedule</span>
                  7 Days
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined flex" style={{ fontSize: '18px' }}>star</span>
                  4.8
                </div>
              </div>
            </div>
          </Link>

          {/* Package Card 3 */}
          <Link href="/package/3" className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant shadow-sm hover:shadow-md transition-all group">
            <div className="h-48 w-full bg-cover bg-center overflow-hidden bg-surface-variant flex items-center justify-center text-outline">
              <span className="material-symbols-outlined flex" style={{ fontSize: '48px' }}>landscape</span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-title-lg text-title-lg text-on-surface group-hover:text-primary transition-colors">Cultural Heritage Tour</h3>
                <span className="font-title-md text-title-md text-primary font-bold">$600</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mb-4">
                Discover ancient ruins and rich traditions with expert local guides over 5 days.
              </p>
              <div className="flex items-center gap-4 text-on-surface-variant font-label-md">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined flex" style={{ fontSize: '18px' }}>schedule</span>
                  5 Days
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined flex" style={{ fontSize: '18px' }}>star</span>
                  4.7
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
