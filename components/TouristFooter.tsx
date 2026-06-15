import Link from "next/link";

export default function TouristFooter() {
  return (
    <footer className="w-full bg-surface-container-highest border-t border-outline-variant mt-2xl md:pb-0 pb-20">
      <div className="max-w-container-max mx-auto px-lg py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-lg">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <div className="font-title-lg text-title-lg font-bold text-on-surface">ExploreGlobe</div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
            Curating unforgettable experiences for the modern explorer.
          </p>
        </div>
        {/* Links Column */}
        <div className="col-span-1 md:col-span-3 flex flex-wrap gap-8 md:gap-16 justify-start md:justify-end">
          <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Privacy Policy</Link>
          <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Terms of Service</Link>
          <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Contact</Link>
          <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">FAQ</Link>
        </div>
        {/* Copyright */}
        <div className="col-span-1 md:col-span-4 mt-8 pt-8 border-t border-outline-variant/30 text-center md:text-left">
          <p className="font-body-md text-body-md text-on-surface-variant">© 2024 Tourism Package Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
