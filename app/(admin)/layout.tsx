import AdminSidebar from "@/components/AdminSidebar";
import AdminTopNav from "@/components/AdminTopNav";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-surface-bright text-on-background overflow-hidden font-body-md">
      <AdminSidebar />
      <div className="flex-1 md:ml-[280px] flex flex-col min-h-screen relative">
        <AdminTopNav />
        {children}
      </div>
    </div>
  );
}
