export default function SuperAdminAnalyticsPage() {
  return (
    <main className="md:ml-sidebar-width pt-16 md:pt-20 px-4 md:px-lg pb-2xl min-h-screen relative">
      <div className="absolute inset-0 z-[-1] pointer-events-none" style={{
        backgroundImage: `linear-gradient(to right, var(--tw-colors-surface-container-high) 1px, transparent 1px), linear-gradient(to bottom, var(--tw-colors-surface-container-high) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        backgroundPosition: 'center top'
      }}></div>
      
      {/* Page Header */}
      <div className="mb-lg flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface mb-1">Master Dashboard</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">System overview and executive metrics.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-surface rounded-lg px-3 py-1.5 border border-outline-variant flex items-center gap-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"></span>
            <span className="font-label-md text-label-md text-on-surface-variant">System Status: Optimal</span>
          </div>
          <button className="h-10 px-4 bg-primary-container text-on-primary-container font-title-md text-title-md rounded-lg hover:bg-primary transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined flex" style={{ fontSize: '20px' }}>download</span>
            Generate Report
          </button>
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-lg">
        {/* Metric 1 */}
        <div className="bg-surface rounded-xl p-lg shadow-sm hover:-translate-y-1 transition-transform border border-outline-variant/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined flex" style={{ fontSize: '64px' }}>attach_money</span>
          </div>
          <h3 className="font-title-md text-title-md text-on-surface-variant mb-2 relative z-10">Total Revenue YTD</h3>
          <div className="flex items-baseline gap-2 relative z-10 mb-2">
            <span className="font-headline-lg text-headline-lg font-bold text-on-surface">$12.4M</span>
          </div>
          <div className="flex items-center gap-1 text-tertiary-fixed-dim bg-tertiary-fixed-dim/10 w-fit px-2 py-0.5 rounded-full relative z-10">
            <span className="material-symbols-outlined flex" style={{ fontSize: '14px' }}>trending_up</span>
            <span className="font-label-md text-label-md font-semibold">+14.2%</span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-surface rounded-xl p-lg shadow-sm hover:-translate-y-1 transition-transform border border-outline-variant/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined flex" style={{ fontSize: '64px' }}>book_online</span>
          </div>
          <h3 className="font-title-md text-title-md text-on-surface-variant mb-2 relative z-10">Active Bookings</h3>
          <div className="flex items-baseline gap-2 relative z-10 mb-2">
            <span className="font-headline-lg text-headline-lg font-bold text-on-surface">8,245</span>
          </div>
          <div className="flex items-center gap-1 text-tertiary-fixed-dim bg-tertiary-fixed-dim/10 w-fit px-2 py-0.5 rounded-full relative z-10">
            <span className="material-symbols-outlined flex" style={{ fontSize: '14px' }}>trending_up</span>
            <span className="font-label-md text-label-md font-semibold">+5.8%</span>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-surface rounded-xl p-lg shadow-sm hover:-translate-y-1 transition-transform border border-outline-variant/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined flex" style={{ fontSize: '64px' }}>warning</span>
          </div>
          <h3 className="font-title-md text-title-md text-on-surface-variant mb-2 relative z-10">Open Support Tickets</h3>
          <div className="flex items-baseline gap-2 relative z-10 mb-2">
            <span className="font-headline-lg text-headline-lg font-bold text-on-surface">142</span>
          </div>
          <div className="flex items-center gap-1 text-error bg-error-container w-fit px-2 py-0.5 rounded-full relative z-10">
            <span className="material-symbols-outlined flex" style={{ fontSize: '14px' }}>trending_down</span>
            <span className="font-label-md text-label-md font-semibold">-2.1%</span>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-surface rounded-xl p-lg shadow-sm hover:-translate-y-1 transition-transform border border-outline-variant/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined flex" style={{ fontSize: '64px' }}>person_add</span>
          </div>
          <h3 className="font-title-md text-title-md text-on-surface-variant mb-2 relative z-10">New Users (Month)</h3>
          <div className="flex items-baseline gap-2 relative z-10 mb-2">
            <span className="font-headline-lg text-headline-lg font-bold text-on-surface">3,492</span>
          </div>
          <div className="flex items-center gap-1 text-tertiary-fixed-dim bg-tertiary-fixed-dim/10 w-fit px-2 py-0.5 rounded-full relative z-10">
            <span className="material-symbols-outlined flex" style={{ fontSize: '14px' }}>trending_up</span>
            <span className="font-label-md text-label-md font-semibold">+18.4%</span>
          </div>
        </div>
      </div>

      {/* Main Chart Area */}
      <div className="bg-surface rounded-xl shadow-sm border border-outline-variant/30 mb-lg p-lg hover:-translate-y-1 transition-transform">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Monthly Revenue & Bookings</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Performance over the last 12 months</p>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-surface-container rounded border border-outline-variant font-label-md text-label-md hover:bg-surface-container-high transition-colors">1M</button>
            <button className="px-3 py-1 bg-surface-container rounded border border-outline-variant font-label-md text-label-md hover:bg-surface-container-high transition-colors">3M</button>
            <button className="px-3 py-1 bg-primary-container text-on-primary-container rounded font-label-md text-label-md font-semibold">1Y</button>
          </div>
        </div>

        {/* Placeholder for interactive chart, using CSS to simulate a sleek graph area */}
        <div className="w-full h-72 rounded-lg bg-surface-container-lowest relative overflow-hidden flex items-end px-4 border border-outline-variant/20">
          {/* Simulated grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between py-4 pointer-events-none">
            <div className="border-b border-outline-variant/20 w-full h-px"></div>
            <div className="border-b border-outline-variant/20 w-full h-px"></div>
            <div className="border-b border-outline-variant/20 w-full h-px"></div>
            <div className="border-b border-outline-variant/20 w-full h-px"></div>
            <div className="border-b border-outline-variant/20 w-full h-px"></div>
          </div>
          
          {/* Simulated Line Chart Path (SVG) */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            {/* Area fill */}
            <path d="M0,100 L0,70 Q10,60 20,75 T40,50 T60,30 T80,45 T100,20 L100,100 Z" fill="url(#chart-gradient)" opacity="0.3"></path>
            {/* Line */}
            <path d="M0,70 Q10,60 20,75 T40,50 T60,30 T80,45 T100,20" fill="none" stroke="var(--tw-colors-primary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            <defs>
              <linearGradient id="chart-gradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="var(--tw-colors-primary-container)"></stop>
                <stop offset="100%" stopColor="transparent"></stop>
              </linearGradient>
            </defs>
          </svg>
          
          {/* Simulated X-axis labels */}
          <div className="absolute bottom-1 left-4 right-4 flex justify-between text-on-surface-variant font-label-md text-label-md opacity-70">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
        </div>
      </div>

      {/* Two Column Layout: Staff Management & System Health */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left Column: Staff Access Management (Spans 8 cols on lg) */}
        <div className="lg:col-span-8 bg-surface rounded-xl shadow-sm border border-outline-variant/30 p-lg hover:-translate-y-1 transition-transform">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Staff Access Management</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Active admin personnel and roles</p>
            </div>
            <button className="h-10 px-4 bg-surface-container rounded-lg border border-outline-variant font-title-md text-title-md text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined flex" style={{ fontSize: '20px' }}>manage_accounts</span>
              Edit Permissions
            </button>
          </div>

          {/* Data Table style list */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant">
                  <th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Employee</th>
                  <th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Role</th>
                  <th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Last Login</th>
                  <th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/50">
                <tr className="hover:bg-surface-container-lowest transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img alt="Admin user" className="w-8 h-8 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4cFIlJ_QDV-9Q5GpIwRSLadrrgsPombsOBCAGGsb9mhnmZFZhnb7R2C7IY3shJALur7wCXKE3vAxGPYDfzHumbFoSpzSmlNUMzlErkNJC5ZqnB8GW_ZtpN5Fwh7uHEtdapj9d6DkRsroqo1T9WVZ1uqLsE7SGwlsh2UZvyJwXd63rFlyASRU7mNAQVd1APQX-zR6QMzBzK_HS-jmPrs5TXkyBKRatLqSCzA5QSBt-qm2PgOkIBYY-IsFla-16iSousBrSDy9qtNc"/>
                      <div>
                        <p className="font-body-md text-body-md font-semibold text-on-surface">Marcus Chen</p>
                        <p className="font-label-md text-label-md text-on-surface-variant">marcus.c@tourism.inc</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 font-body-md text-body-md">Super Admin</td>
                  <td className="py-3 px-4 font-body-md text-body-md text-on-surface-variant">2 mins ago</td>
                  <td className="py-3 px-4 text-right">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-md text-label-md bg-tertiary-fixed-dim/20 text-tertiary-container border border-tertiary-fixed-dim/30">Active</span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-lowest transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img alt="Admin user" className="w-8 h-8 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-LOp_C3UV2C-A69Oz7oCqg_qNND3mMExp8lKezR2st54_6FEAndjjn9H7CUs1WoNa86cfQoi-SrMYqeteG_V4O-cRT7ocGS0fiOcSKDInPkZWw91kjW8NpVBkmt0jSGDEHeFH60cQVHzq1pPBy81egsp9pubgMuFS6K_M0dXOVcqOCkXNcWCdj-NUImSG6uGpATo54ai_GBktQKOnbsczkSWx5-SvsATzSJXI_3A8ip0TCIriRMnmdBDZMrvMJIAoUDZQmaiBNo8"/>
                      <div>
                        <p className="font-body-md text-body-md font-semibold text-on-surface">Sarah Jenkins</p>
                        <p className="font-label-md text-label-md text-on-surface-variant">s.jenkins@tourism.inc</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 font-body-md text-body-md">Financial Controller</td>
                  <td className="py-3 px-4 font-body-md text-body-md text-on-surface-variant">1 hour ago</td>
                  <td className="py-3 px-4 text-right">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-md text-label-md bg-tertiary-fixed-dim/20 text-tertiary-container border border-tertiary-fixed-dim/30">Active</span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-lowest transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full border border-outline-variant bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-sm">
                        DR
                      </div>
                      <div>
                        <p className="font-body-md text-body-md font-semibold text-on-surface">David Ross</p>
                        <p className="font-label-md text-label-md text-on-surface-variant">d.ross@tourism.inc</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 font-body-md text-body-md">Editor</td>
                  <td className="py-3 px-4 font-body-md text-body-md text-on-surface-variant">Yesterday, 4:30 PM</td>
                  <td className="py-3 px-4 text-right">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-md text-label-md bg-surface-container-high text-on-surface border border-outline-variant">Offline</span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-lowest transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img alt="Admin user" className="w-8 h-8 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBapsygbpSBzpWYNUM3dTNNA-b0dA8Q1AZEF1bwSpNK9H9Qr3mwkDbBNeTN73uWpqw1VVAyCoR7gml4kreVCzwaT8xtHqnea8jqeTONY0wOIedBX-Uksfrt4c2EErEl5nmSqmSym1I6OUKD6kpsCmiQNnScD1wvrWDucEAF02JUA4tsJYy1elgzhvYvugkAskpbqen8M9Id3v9xDGdUDtyXWR4-FglwXHL1rzQ5OH1STHdRRZXYF4y4wJTeCZBZ1gfxttA6mFq2PJk"/>
                      <div>
                        <p className="font-body-md text-body-md font-semibold text-on-surface">Elena Rodriguez</p>
                        <p className="font-label-md text-label-md text-on-surface-variant">e.rodriguez@tourism.inc</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 font-body-md text-body-md">Basic Admin</td>
                  <td className="py-3 px-4 font-body-md text-body-md text-on-surface-variant">Oct 12, 2023</td>
                  <td className="py-3 px-4 text-right">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-md text-label-md bg-error-container text-on-error-container border border-error/30">Suspended</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: System Health (Spans 4 cols on lg) */}
        <div className="lg:col-span-4 bg-surface rounded-xl shadow-sm border border-outline-variant/30 p-lg hover:-translate-y-1 transition-transform flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-title-lg text-title-lg font-bold text-on-surface">System Health</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">API & Service status</p>
            </div>
            <span className="material-symbols-outlined text-tertiary-fixed flex" style={{ fontSize: '28px' }}>health_and_safety</span>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            {/* Status Item 1 */}
            <div className="p-3 border border-outline-variant/50 rounded-lg bg-surface-container-lowest flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-tertiary-fixed-dim/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary-container flex" style={{ fontSize: '18px' }}>check_circle</span>
                </div>
                <div>
                  <p className="font-title-md text-title-md text-on-surface">Database Backup</p>
                  <p className="font-label-md text-label-md text-on-surface-variant">Last backup: 03:00 AM</p>
                </div>
              </div>
              <span className="font-label-md text-label-md text-tertiary-container font-semibold">Successful</span>
            </div>

            {/* Status Item 2 */}
            <div className="p-3 border border-outline-variant/50 rounded-lg bg-surface-container-lowest flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-tertiary-fixed-dim/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary-container flex" style={{ fontSize: '18px' }}>smart_toy</span>
                </div>
                <div>
                  <p className="font-title-md text-title-md text-on-surface">AI Chat API</p>
                  <p className="font-label-md text-label-md text-on-surface-variant">Latency: 45ms</p>
                </div>
              </div>
              <span className="font-label-md text-label-md text-tertiary-container font-semibold">Online</span>
            </div>

            {/* Status Item 3 */}
            <div className="p-3 border border-outline-variant/50 rounded-lg bg-surface-container-lowest flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-tertiary-fixed-dim/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary-container flex" style={{ fontSize: '18px' }}>payment</span>
                </div>
                <div>
                  <p className="font-title-md text-title-md text-on-surface">Payment Gateway</p>
                  <p className="font-label-md text-label-md text-on-surface-variant">Stripe / PayPal</p>
                </div>
              </div>
              <span className="font-label-md text-label-md text-tertiary-container font-semibold">Online</span>
            </div>

            {/* Status Item 4 (Warning example) */}
            <div className="p-3 border border-outline-variant/50 rounded-lg bg-surface-container-lowest flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-surface-tint/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-surface-tint flex" style={{ fontSize: '18px' }}>cloud_sync</span>
                </div>
                <div>
                  <p className="font-title-md text-title-md text-on-surface">CDN Sync</p>
                  <p className="font-label-md text-label-md text-on-surface-variant">High load detected</p>
                </div>
              </div>
              <span className="font-label-md text-label-md text-surface-tint font-semibold">Lagging</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
