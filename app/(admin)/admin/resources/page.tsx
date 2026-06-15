import MetricCard from "@/components/MetricCard";
import { DataTable, TableHeader, TableRow, TableCell } from "@/components/DataTable";

export default function AdminResourcesPage() {
  return (
    <main className="md:ml-sidebar-width h-screen flex flex-col relative transition-all duration-300">
      {/* TopNavBar (Admin specific layout for content area) */}
      <header className="flex justify-between items-center w-full px-lg py-sm bg-surface-container-lowest dark:bg-surface-container-low border-b border-outline-variant shadow-sm z-30 sticky top-0 h-16">
        <div className="flex items-center gap-md">
          <h2 className="font-title-lg text-title-lg text-on-surface font-semibold">Hotel Management</h2>
        </div>
        <div className="flex items-center gap-lg">
          <div className="relative focus-within:ring-2 focus-within:ring-primary rounded-full transition-all">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm flex">search</span>
            <input 
              className="pl-10 pr-4 py-2 bg-surface-container-high border-none rounded-full font-body-md text-body-md text-on-surface focus:outline-none focus:ring-0 w-64 placeholder-on-surface-variant" 
              placeholder="Search hotels..." 
              type="text"
            />
          </div>
          <div className="flex items-center gap-sm text-on-surface-variant">
            <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors group focus-within:ring-2 focus-within:ring-primary flex">
              <span className="material-symbols-outlined group-hover:text-primary transition-colors flex">notifications</span>
            </button>
            <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors group focus-within:ring-2 focus-within:ring-primary flex">
              <span className="material-symbols-outlined group-hover:text-primary transition-colors flex">settings</span>
            </button>
          </div>
          <button className="bg-tertiary-container hover:bg-tertiary text-on-tertiary-container font-title-md text-title-md py-2 px-4 rounded-lg flex items-center gap-2 transition-all active:scale-95 shadow-sm">
            <span className="material-symbols-outlined flex">add</span>
            Add New Hotel
          </button>
        </div>
      </header>

      {/* Page Content */}
      <div className="flex-1 overflow-y-auto p-lg bg-surface-container-low">
        <div className="max-w-container-max mx-auto space-y-lg">
          {/* Metric Summary Row (Bento style) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-lg">
            <MetricCard 
              title="Total Hotels"
              value="142"
              icon="corporate_fare"
              iconBgClass="bg-primary/5"
              iconTextClass="text-primary"
              trendIcon="trending_up"
              trendText="+12%"
              trendColorClass="text-tertiary"
              trendTextColorClass="bg-tertiary-container/30 px-2 py-1 rounded-full"
            />
            <MetricCard 
              title="Active Contracts"
              value="128"
              icon="check_circle"
              iconBgClass="bg-tertiary/5"
              iconTextClass="text-tertiary"
              trendIcon=""
              trendText="Active"
              trendColorClass="text-on-surface-variant"
            />
            <MetricCard 
              title="Pending Review"
              value="14"
              icon="pending_actions"
              iconBgClass="bg-error/5"
              iconTextClass="text-error"
              trendIcon=""
              trendText="Needs Attention"
              trendColorClass="text-on-surface-variant"
            />
            <MetricCard 
              title="Avg Rating"
              value="4.6"
              icon="star_rate"
              iconBgClass="bg-secondary/5"
              iconTextClass="text-secondary"
              trendIcon="star"
              trendText=""
              trendColorClass="text-secondary"
            />
          </div>

          {/* Data Table Container */}
          <DataTable title="Partnered Hotels Database">
            <TableHeader columns={[
              { label: "Hotel Name" },
              { label: "Location" },
              { label: "Star Rating" },
              { label: "Status" },
              { label: "Actions", align: "right" }
            ]} />
            <tbody className="font-body-md text-body-md text-on-surface divide-y divide-outline-variant">
              <TableRow className="group">
                <TableCell>
                  <div className="flex items-center gap-sm">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high overflow-hidden shrink-0">
                      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7gz4uvHlESFy18hRrB9WideWXhiflDwr5-LeRS4ts7A8vmFhanvJGciiSg8yWYoc2_yjwwjN9NO3kDRyZ-OtwCn3OOfmCwjhTVNmKeU5dsmy0Xqjq39omCtugzV27ao9x3qtlhFV287ftr0QCCjJDaUDbqSTfGJpkffz1Ikp17ZJM5WCftP-SHbrsBL6sFr3fV_Mt1J0XKQ52Knby4ysvGB0_dG5DHe77F7edAjte7Ib9Fpm2HXfP5r786EOaUZ1Z_Tf9yvYlR_k')" }}></div>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md font-medium group-hover:text-primary transition-colors">Grand Azure Resort</span>
                      <span className="font-label-md text-label-md text-on-surface-variant">ID: HTL-001</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span>Santorini, Greece</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">Europe</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex text-secondary gap-xs">
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-label-md text-label-md bg-tertiary-container/20 text-tertiary">
                    <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                    Confirmed
                  </span>
                </TableCell>
                <TableCell align="right">
                  <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container-high rounded-full transition-colors flex">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </TableCell>
              </TableRow>
              <TableRow className="group">
                <TableCell>
                  <div className="flex items-center gap-sm">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high overflow-hidden shrink-0">
                      <div className="w-full h-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
                        <span className="material-symbols-outlined">domain</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md font-medium group-hover:text-primary transition-colors">Alpine Meadows Lodge</span>
                      <span className="font-label-md text-label-md text-on-surface-variant">ID: HTL-042</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span>Zermatt, Switzerland</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">Europe</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex text-secondary gap-xs">
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[18px] text-outline-variant">star</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-label-md text-label-md bg-[#FEF3C7] text-[#92400E]">
                    <span className="w-2 h-2 rounded-full bg-[#D97706]"></span>
                    Pending
                  </span>
                </TableCell>
                <TableCell align="right">
                  <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container-high rounded-full transition-colors flex">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </TableCell>
              </TableRow>
            </tbody>
          </DataTable>
        </div>
      </div>
    </main>
  );
}
