import Link from "next/link";

export default function SuperAdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-background text-on-background font-body-md text-body-md antialiased overflow-x-hidden min-h-screen">
      {/* TopNavBar */}
      <header className="bg-surface-container-lowest border-b border-outline-variant shadow-sm docked full-width top-0 z-40 hidden md:flex fixed w-full">
        <div className="flex justify-between items-center w-full px-lg py-sm ml-sidebar-width max-w-[calc(100%-280px)]">
          <div className="flex items-center gap-md">
            {/* Search Bar */}
            <div className="relative focus-within:ring-2 focus-within:ring-primary rounded-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant flex" style={{ fontSize: '20px' }}>search</span>
              <input 
                className="pl-10 pr-4 py-2 bg-surface-container rounded-full border-none focus:ring-0 w-64 text-body-md font-body-md text-on-surface placeholder-on-surface-variant" 
                placeholder="Search..." 
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-md">
            <button className="p-2 text-on-surface-variant hover:text-primary transition-all rounded-full hover:bg-surface-container flex">
              <span className="material-symbols-outlined flex">notifications</span>
            </button>
            <button className="p-2 text-on-surface-variant hover:text-primary transition-all rounded-full hover:bg-surface-container flex">
              <span className="material-symbols-outlined flex">settings</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant ml-2 cursor-pointer hover:ring-2 hover:ring-primary transition-all">
              <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiVMjFEfleFMCKxg6soJAP5SJzKWgEDY0UVkd_j6elNd_pPfAmqn9Ni3TLoFhGBJbWidXLeQwPv16IL87mouis3yrS935GQNKezJhY4xGvkQsPaT8g6KtwzMgkd7190wd-AS7jhrICFlPwIYyomIX5tX5YnoDEdmfxiV-g0_rT1mMjT759-p0RueSlYo63-jpYs-Ifw6i1t3Bq3QS6cILWwRXzpS5AQSOSip3ccqdHgQ5eX7yHd-JVDbSn3Ejc4M9KzLErs-XaTO0"/>
            </div>
          </div>
        </div>
      </header>

      {/* SideNavBar */}
      <aside className="bg-surface w-sidebar-width h-full fixed left-0 top-0 shadow-sm border-r border-outline-variant z-50 hidden md:flex flex-col py-lg px-md">
        <div className="mb-xl px-2 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container">
            <span className="material-symbols-outlined flex" style={{ fontSize: '24px' }}>travel_explore</span>
          </div>
          <div>
            <h1 className="font-headline-md text-headline-md font-bold text-primary">Admin Panel</h1>
            <p className="font-label-md text-label-md text-on-surface-variant">Global Tourism Mgmt</p>
          </div>
        </div>
        <nav className="flex-1 flex flex-col gap-1 overflow-y-auto">
          {/* Active Tab: Dashboard */}
          <Link className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary-container text-on-primary-container font-semibold scale-95 active:scale-90 transition-transform" href="/superadmin/analytics">
            <span className="material-symbols-outlined flex">dashboard</span>
            <span className="font-body-md text-body-md">Dashboard</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200 scale-95 active:scale-90 transition-transform" href="#">
            <span className="material-symbols-outlined flex">inventory_2</span>
            <span className="font-body-md text-body-md">Packages</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200 scale-95 active:scale-90 transition-transform" href="#">
            <span className="material-symbols-outlined flex">hotel</span>
            <span className="font-body-md text-body-md">Hotels</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200 scale-95 active:scale-90 transition-transform" href="#">
            <span className="material-symbols-outlined flex">directions_car</span>
            <span className="font-body-md text-body-md">Vehicles</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200 scale-95 active:scale-90 transition-transform" href="#">
            <span className="material-symbols-outlined flex">group</span>
            <span className="font-body-md text-body-md">Users</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200 scale-95 active:scale-90 transition-transform" href="#">
            <span className="material-symbols-outlined flex">forum</span>
            <span className="font-body-md text-body-md">Messages</span>
          </Link>
        </nav>
        <div className="mt-auto pt-4 border-t border-outline-variant px-2">
          <div className="flex items-center gap-3 mb-4">
            <img alt="Admin profile avatar" className="w-10 h-10 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq8Kp8dUmaSkEaFBjndNVXSxWHurO-6y-EXMFL2spjYK0k50KPg8Vo9naE9EyIf6E6D-9_bVNihv_dIL0zzv7u86JfLCGpUwWDI6RjJWOhf-DiUwKBNZiCkI2XdCUI3YQ6mlqenJgoRagLDycisEWN7ACBzV0EgE0sNj6yyuW_hvdYheSEiVXjlMTdkkmJyPgF3FcvKURBfvThM-pZjvMyhjavmZgbIhe7-59a-Cu1Qwnkzj3OqtpXrODGsws-cMEe4J2y0O3s4d4"/>
            <div className="flex-1 min-w-0">
              <p className="font-body-md text-body-md font-semibold text-on-surface truncate">Admin Master</p>
              <p className="font-label-md text-label-md text-on-surface-variant truncate">Super Admin</p>
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-error border border-error/30 rounded-lg hover:bg-error-container transition-colors">
            <span className="material-symbols-outlined flex" style={{ fontSize: '18px' }}>logout</span>
            <span className="font-body-md text-body-md font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {children}
    </div>
  );
}
