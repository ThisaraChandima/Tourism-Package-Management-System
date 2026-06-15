import Link from "next/link";

export default function TouristNav() {
  return (
    <>
      {/* Top Navigation (ExploreGlobe Consumer) */}
      <nav className="hidden md:flex fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-md">
        <div className="max-w-container-max mx-auto px-lg flex justify-between items-center h-2xl w-full">
          <div className="font-headline-lg text-headline-lg font-black text-secondary">
            ExploreGlobe
          </div>
          <div className="flex items-center gap-xl">
            <Link className="font-body-lg text-body-lg text-on-surface hover:text-secondary hover:opacity-80 transition-opacity" href="#">Destinations</Link>
            <Link className="font-body-lg text-body-lg text-secondary font-bold border-b-2 border-secondary hover:opacity-80 transition-opacity" href="#">Packages</Link>
            <Link className="font-body-lg text-body-lg text-on-surface hover:text-secondary hover:opacity-80 transition-opacity" href="#">Hotels</Link>
            <Link className="font-body-lg text-body-lg text-on-surface hover:text-secondary hover:opacity-80 transition-opacity" href="#">About Us</Link>
            <Link className="font-body-lg text-body-lg text-on-surface hover:text-secondary hover:opacity-80 transition-opacity" href="#">Support</Link>
          </div>
          <button className="bg-primary-container text-on-primary h-12 px-6 rounded-lg font-title-md text-title-md hover:bg-primary transition-colors active:scale-98">
            Book Now
          </button>
        </div>
      </nav>
      {/* Mobile Top Header (Fallback) */}
      <nav className="md:hidden flex justify-between items-center w-full px-lg py-sm bg-surface-container-lowest border-b border-outline-variant shadow-sm sticky top-0 z-50">
        <div className="font-headline-lg-mobile text-headline-lg-mobile font-extrabold text-primary">
          ExploreGlobe
        </div>
        <button className="text-on-surface-variant p-2 rounded-full hover:bg-surface-container-high transition-colors">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>
    </>
  );
}
