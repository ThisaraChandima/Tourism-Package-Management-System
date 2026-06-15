import TouristNav from "@/components/TouristNav";
import TouristFooter from "@/components/TouristFooter";

export default function TouristLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col antialiased selection:bg-primary-container selection:text-on-primary-container">
      <TouristNav />
      {children}
      {/* Floating AI Assistant Widget */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
        <div className="bg-inverse-surface text-inverse-on-surface font-label-md text-label-md px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none mb-1">
          Chat with our AI Assistant
        </div>
        <button className="w-14 h-14 bg-tertiary-container text-on-tertiary-container rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
        </button>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-surface dark:bg-surface-dim shadow-[0_-4px_12px_rgba(0,0,0,0.05)] rounded-t-xl pb-safe">
        <div className="flex justify-around items-center px-4 py-2">
          <a className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-high rounded-full px-4 py-1" href="#">
            <span className="material-symbols-outlined">map</span>
            <span className="font-label-md text-label-md mt-1">My Tours</span>
          </a>
          <a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>directions</span>
            <span className="font-label-md text-label-md mt-1">Route</span>
          </a>
          <a className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-high rounded-full px-4 py-1" href="#">
            <span className="material-symbols-outlined">chat_bubble</span>
            <span className="font-label-md text-label-md mt-1">Chat</span>
          </a>
          <a className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-high rounded-full px-4 py-1" href="#">
            <span className="material-symbols-outlined">person</span>
            <span className="font-label-md text-label-md mt-1">Account</span>
          </a>
        </div>
      </nav>
      <TouristFooter />
    </div>
  );
}
