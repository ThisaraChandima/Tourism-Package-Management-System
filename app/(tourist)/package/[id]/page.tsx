export default async function TouristPackageDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  return (
    <main className="flex-grow flex flex-col md:pt-2xl">
      {/* Hero Section */}
      <section className="relative w-full h-[614px] md:h-[716px] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAwRifa51yG8CgyGvT2Ky4yFiP1U5H8u2GsBwsMt7bpbaBK4Ll73Fy_gu3B22_1XxUGM5nt9JzlFXxcEvojBpNeVAX2av72CE74-hPU2cZSTBAdP08xrVDMEG1PmlfU6mg_vDnXOPgUzyDJXGDCb7QonqsoECttQhPKp5FbxS9IO4qWrRFgs0rtzNGbRVH7zotd-kdjXgZmp5gfZUqVTNFGEPmyg8HrsdT3TMwB-tNbuz1gR5f9UPD-CIIfocG9AdW9mFrXhcKGbzI')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-container-max mx-auto px-lg w-full flex flex-col items-center text-center mt-12 md:mt-0">
          <span className="font-label-md text-label-md text-secondary-fixed uppercase tracking-widest mb-4 drop-shadow-md">Premium Tour Package</span>
          <h1 className="font-display-lg text-display-lg text-white mb-6 drop-shadow-lg">3-Day Mountain Explorer</h1>
          <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mb-8 drop-shadow-md hidden md:block">
            Immerse yourself in breathtaking landscapes, thrilling adventures, and serene accommodations. Experience the mountains like never before.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-auto">
            <button className="bg-secondary text-on-secondary h-12 px-8 rounded-lg font-title-md text-title-md hover:bg-secondary-container transition-colors shadow-lg active:scale-95 flex items-center justify-center gap-2">
              Book Now
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="glass-dark text-white h-12 px-8 rounded-lg font-title-md text-title-md hover:bg-white/20 transition-colors shadow-lg active:scale-95 flex items-center justify-center gap-2">
              View Gallery
              <span className="material-symbols-outlined">photo_library</span>
            </button>
          </div>
        </div>

        {/* Quick Stats Bar (Floating) */}
        <div className="absolute bottom-0 left-0 w-full transform translate-y-1/2 z-20 px-lg hidden md:block">
          <div className="max-w-4xl mx-auto glass rounded-xl shadow-lg p-6 flex justify-between items-center border border-outline-variant/30">
            <div className="flex flex-col items-center px-4">
              <span className="material-symbols-outlined text-secondary mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
              <span className="font-title-md text-title-md text-on-surface">3 Days, 2 Nights</span>
            </div>
            <div className="w-px h-12 bg-outline-variant/30"></div>
            <div className="flex flex-col items-center px-4">
              <span className="material-symbols-outlined text-secondary mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>group</span>
              <span className="font-title-md text-title-md text-on-surface">Max 10 People</span>
            </div>
            <div className="w-px h-12 bg-outline-variant/30"></div>
            <div className="flex flex-col items-center px-4">
              <span className="material-symbols-outlined text-secondary mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>fitness_center</span>
              <span className="font-title-md text-title-md text-on-surface">Moderate Activity</span>
            </div>
            <div className="w-px h-12 bg-outline-variant/30"></div>
            <div className="flex flex-col items-center px-4">
              <span className="material-symbols-outlined text-secondary mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="font-title-md text-title-md text-on-surface">4.9/5 (120 Reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-container-max mx-auto w-full px-lg py-xl md:py-2xl md:mt-16 flex flex-col lg:flex-row gap-xl">
        {/* Left Column: Itinerary & Details */}
        <div className="w-full lg:w-2/3 flex flex-col gap-12">
          {/* Intro Paragraph */}
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Overview</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Escape the city and dive deep into nature with our meticulously planned 3-day mountain exploration. From the lush valleys of Kitulgala to the mist-shrouded peaks, this tour is designed for nature lovers seeking a balance of adventure and luxury relaxation. Travel comfortably in premium vehicles and stay in hand-picked accommodations that offer stunning views right from your window.
            </p>
          </div>

          {/* Daily Itinerary */}
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>map</span>
              Daily Itinerary
            </h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-outline-variant before:to-transparent">
              {/* Day 1 Card */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Timeline Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="font-title-md text-title-md">1</span>
                </div>
                {/* Card Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-lg bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant hover:shadow-md transition-shadow group-hover:border-primary-fixed-dim">
                  <div className="flex items-center gap-2 mb-3 text-secondary">
                    <span className="material-symbols-outlined">directions_car</span>
                    <span className="font-label-md text-label-md uppercase tracking-wider font-semibold">Luxury Van Transfer</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Day 1: Kitulgala</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                    Arrive in Kitulgala, the adrenaline capital. Settle into your boutique forest lodge before embarking on a guided nature trail. The evening concludes with a traditional welcome dinner by the river.
                  </p>
                  
                  {/* Hotel Preview */}
                  <div className="mt-4 rounded-lg overflow-hidden border border-outline-variant bg-surface-container-lowest flex flex-col sm:flex-row">
                    <div 
                      className="w-full sm:w-1/3 h-32 sm:h-auto bg-cover bg-center" 
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBll71RGQzgie67_8g4yAc3WcUeGu0LeMGNxtJGSMSUSy0hCtsZa5U-4v-kOpm2AkRI1fUYZiaW5hzYEZ9YZKGf1-yHhSQHfFvlz6gdokCTfXlNrYq1ceoZF9-TF3rLUlkK1zeAzBy2t792xJ2EwIfxt7DRZWkJz5h0pe1YtuawZJbZ5tmliiKwaejgiv8JHPYA_gbN41jX2rVV--C31-Xl7UAYZRjEounQagknN5nGWGhjLfn-QB9xXacawmC_NAbu0g3DZ1Tcaqk')" }}
                    >
                    </div>
                    <div className="p-4 w-full sm:w-2/3 flex flex-col justify-center">
                      <div className="flex items-center gap-1 mb-1 text-tertiary-container">
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>hotel</span>
                        <span className="font-label-md text-label-md">Accommodation</span>
                      </div>
                      <h4 className="font-title-md text-title-md text-on-surface">Riverston Eco Lodge</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">1 Night • Full Board</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Booking Widget */}
        <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
          <div className="sticky top-28 bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-outline-variant p-lg flex flex-col gap-6">
            {/* Price Header */}
            <div className="flex justify-between items-end border-b border-outline-variant pb-4">
              <div>
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider block mb-1">Total Price</span>
                <div className="flex items-baseline gap-1">
                  <span className="font-display-lg text-display-lg text-primary">$850</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">/ person</span>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-tertiary-container/10 text-tertiary-container font-label-md text-label-md">
                  <span className="material-symbols-outlined text-[14px]">bolt</span>
                  Instant Confirmation
                </span>
              </div>
            </div>

            {/* Amenities Included */}
            <div>
              <h4 className="font-title-md text-title-md text-on-surface mb-3">What's Included</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary-container mt-0.5">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">2 Nights premium accommodation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary-container mt-0.5">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">Luxury van transfers with AC</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary-container mt-0.5">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">All meals (Breakfast, Lunch, Dinner)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary-container mt-0.5">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">Expert English-speaking guide</span>
                </li>
              </ul>
            </div>

            {/* Action Area */}
            <div className="flex flex-col gap-3 mt-4">
              <button className="w-full bg-primary text-on-primary h-12 rounded-lg font-title-lg text-title-lg hover:bg-primary-container transition-colors shadow-sm active:scale-[0.98]">
                Book Now
              </button>
              <button className="w-full bg-transparent border border-outline text-primary h-12 rounded-lg font-title-md text-title-md hover:bg-surface-container transition-colors active:scale-[0.98]">
                Inquire via Email
              </button>
            </div>
            <p className="font-label-md text-label-md text-center text-on-surface-variant mt-2">
              Free cancellation up to 48 hours before.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
