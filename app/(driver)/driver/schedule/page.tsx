export default function DriverSchedulePage() {
  return (
    <div className="bg-surface-bright min-h-screen font-body-md text-on-background pb-20 md:pb-0">
      {/* Mobile Top Header */}
      <header className="bg-primary text-on-primary px-lg py-md flex justify-between items-center shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-sm">
          <span className="material-symbols-outlined text-2xl">directions_car</span>
          <h1 className="font-headline-md text-headline-md font-bold tracking-tight">Driver Hub</h1>
        </div>
        <button className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      <main className="p-md max-w-md mx-auto mt-4">
        <div className="mb-md">
          <h2 className="font-title-lg text-title-lg font-bold text-on-surface">Today's Schedule</h2>
          <p className="font-label-md text-label-md text-on-surface-variant">Thursday, Oct 24 • Vehicle V-102</p>
        </div>

        <div className="space-y-4">
          {/* Active Trip Card */}
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/50 overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary-container"></div>
            <div className="p-md pl-5">
              <div className="flex justify-between items-start mb-3">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-tertiary-container text-on-tertiary-container">
                  In Progress
                </span>
                <span className="font-label-md text-label-md font-bold text-primary">09:00 AM</span>
              </div>
              <h3 className="font-title-md text-title-md font-bold text-on-surface mb-1">Colombo to Kandy</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4 flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">group</span>
                4 Passengers (Smith Family)
              </p>
              
              <div className="flex flex-col gap-2 relative before:absolute before:left-[11px] before:top-6 before:bottom-6 before:w-0.5 before:bg-outline-variant/30">
                <div className="flex items-start gap-3 relative z-10">
                  <div className="w-6 h-6 rounded-full bg-surface-container-highest border-2 border-surface-container-lowest flex items-center justify-center mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface-variant uppercase">Pickup</p>
                    <p className="font-body-md text-body-md font-medium text-on-surface">Cinnamon Grand, Colombo</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 relative z-10 mt-2">
                  <div className="w-6 h-6 rounded-full bg-surface-container-highest border-2 border-surface-container-lowest flex items-center justify-center mt-0.5">
                    <span className="material-symbols-outlined text-[14px] text-tertiary-container">location_on</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface-variant uppercase">Dropoff</p>
                    <p className="font-body-md text-body-md font-medium text-on-surface">Queens Hotel, Kandy</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-outline-variant/30 flex gap-2">
                <button className="flex-1 bg-primary text-on-primary py-2 rounded-lg font-title-md text-title-md hover:opacity-90 transition-opacity flex justify-center items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">navigation</span> Navigate
                </button>
                <button className="w-12 h-10 bg-secondary-container text-on-secondary-container rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity">
                  <span className="material-symbols-outlined">call</span>
                </button>
              </div>
            </div>
          </div>

          {/* Upcoming Trip Card */}
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-md opacity-80">
            <div className="flex justify-between items-start mb-3">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-surface-container-highest text-on-surface-variant border border-outline-variant">
                Upcoming
              </span>
              <span className="font-label-md text-label-md font-bold text-on-surface-variant">04:30 PM</span>
            </div>
            <h3 className="font-title-md text-title-md font-bold text-on-surface mb-1">Kandy City Tour</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-2">2 Hours • 4 Passengers</p>
            <p className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">location_on</span>
              Starts at Queens Hotel, Kandy
            </p>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-outline-variant shadow-[0_-4px_12px_rgba(0,0,0,0.05)] z-40 pb-safe">
        <div className="flex justify-around items-center px-2 py-2">
          <button className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
            <span className="font-label-md text-label-md mt-1">Schedule</span>
          </button>
          <button className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high rounded-full px-4 py-1 transition-colors">
            <span className="material-symbols-outlined">map</span>
            <span className="font-label-md text-label-md mt-1">Map</span>
          </button>
          <button className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high rounded-full px-4 py-1 transition-colors relative">
            <span className="material-symbols-outlined">chat</span>
            <span className="font-label-md text-label-md mt-1">Messages</span>
            <span className="absolute top-1 right-3 w-2 h-2 bg-error rounded-full"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}
