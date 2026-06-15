import MetricCard from "@/components/MetricCard";
import { DataTable, TableHeader, TableRow, TableCell } from "@/components/DataTable";

export default function AdminDashboardPage() {
  return (
    <main className="flex-1 p-lg overflow-y-auto">
      <div className="mb-xl">
        <h2 className="font-headline-lg text-headline-lg font-semibold text-on-background mb-sm">Dashboard Overview</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">Welcome back. Here's a summary of your global tourism operations.</p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-xl">
        <MetricCard 
          title="Total Packages"
          value="24"
          icon="inventory_2"
          iconBgClass="bg-primary-container/10"
          iconTextClass="text-primary"
          trendIcon="trending_up"
          trendText="+12% this month"
          trendColorClass="text-tertiary-fixed-dim"
          trendTextColorClass="text-on-tertiary-container"
        />
        <MetricCard 
          title="Registered Hotels"
          value="85"
          icon="hotel"
          iconBgClass="bg-secondary-container/10"
          iconTextClass="text-secondary"
          trendIcon="trending_up"
          trendText="+3 new partners"
          trendColorClass="text-tertiary-fixed-dim"
          trendTextColorClass="text-on-tertiary-container"
        />
        <MetricCard 
          title="Available Vehicles"
          value="32"
          icon="directions_car"
          iconBgClass="bg-primary-fixed/20"
          iconTextClass="text-primary"
          trendIcon="horizontal_rule"
          trendText="Stable inventory"
          trendColorClass="text-on-surface-variant"
        />
        <MetricCard 
          title="Active Inquiries"
          value="5"
          icon="forum"
          iconBgClass="bg-error-container/50"
          iconTextClass="text-error"
          trendIcon="priority_high"
          trendText="Needs attention"
          trendColorClass="text-error"
        />
      </div>

      {/* Data Table Section */}
      <DataTable title="Recent Tour Packages" actionButtonText="New Package">
        <TableHeader columns={[
          { label: "Package Title" },
          { label: "Duration" },
          { label: "Assigned Vehicle" },
          { label: "Status" },
          { label: "Action", align: "right" }
        ]} />
        <tbody className="font-body-md text-body-md text-on-surface">
          <TableRow>
            <TableCell className="font-medium text-on-background">Alpine Escape - Swiss Alps</TableCell>
            <TableCell className="text-on-surface-variant">7 Days / 6 Nights</TableCell>
            <TableCell className="text-on-surface-variant">Luxury Coach (V-102)</TableCell>
            <TableCell>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-md text-label-md font-medium bg-tertiary-container/10 text-on-tertiary-container border border-tertiary-container/20">
                Published
              </span>
            </TableCell>
            <TableCell align="right">
              <button className="text-on-surface-variant hover:text-primary transition-colors p-1 rounded hover:bg-surface-container-high inline-flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">edit</span>
              </button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-on-background">Kyoto Spring Blossom Tour</TableCell>
            <TableCell className="text-on-surface-variant">5 Days / 4 Nights</TableCell>
            <TableCell className="text-on-surface-variant">Mini-Bus (V-045)</TableCell>
            <TableCell>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-md text-label-md font-medium bg-surface-container-highest text-on-surface-variant border border-outline-variant">
                Draft
              </span>
            </TableCell>
            <TableCell align="right">
              <button className="text-on-surface-variant hover:text-primary transition-colors p-1 rounded hover:bg-surface-container-high inline-flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">edit</span>
              </button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-on-background">Grand Canyon Adventure</TableCell>
            <TableCell className="text-on-surface-variant">3 Days / 2 Nights</TableCell>
            <TableCell className="text-on-surface-variant">SUV Safari (V-210)</TableCell>
            <TableCell>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-md text-label-md font-medium bg-tertiary-container/10 text-on-tertiary-container border border-tertiary-container/20">
                Published
              </span>
            </TableCell>
            <TableCell align="right">
              <button className="text-on-surface-variant hover:text-primary transition-colors p-1 rounded hover:bg-surface-container-high inline-flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">edit</span>
              </button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-on-background">Maldives Island Hopping</TableCell>
            <TableCell className="text-on-surface-variant">10 Days / 9 Nights</TableCell>
            <TableCell className="text-on-surface-variant">Speedboat (B-012)</TableCell>
            <TableCell>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-md text-label-md font-medium bg-error-container/20 text-on-error-container border border-error-container/30">
                Review
              </span>
            </TableCell>
            <TableCell align="right">
              <button className="text-on-surface-variant hover:text-primary transition-colors p-1 rounded hover:bg-surface-container-high inline-flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">edit</span>
              </button>
            </TableCell>
          </TableRow>
        </tbody>
      </DataTable>
    </main>
  );
}
