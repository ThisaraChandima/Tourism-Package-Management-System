import Link from "next/link";
import Image from "next/image";

export default function AdminSidebar() {
  return (
    <nav className="hidden md:flex flex-col h-full py-lg px-md bg-surface dark:bg-surface-dim text-primary dark:text-primary-fixed-dim font-body-md text-body-md w-sidebar-width fixed left-0 top-0 shadow-sm dark:shadow-none border-r border-outline-variant dark:border-outline z-40 sidebar-scroll overflow-y-auto">
      <div className="flex items-center gap-md mb-xl px-sm">
        <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-title-lg">
          <span className="material-symbols-outlined">travel_explore</span>
        </div>
        <div>
          <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim tracking-tight">Admin Panel</h1>
          <p className="font-label-md text-label-md text-on-surface-variant">Global Tourism Mgmt</p>
        </div>
      </div>
      <ul className="flex-1 space-y-2">
        <li>
          <Link href="/admin/dashboard" className="flex items-center gap-md px-md py-sm rounded-lg hover:bg-surface-container-high transition-colors duration-200 scale-95 active:scale-90 text-on-surface-variant hover:text-primary">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href="/admin/packages/create" className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200 scale-95 active:scale-90 hover:text-primary">
            <span className="material-symbols-outlined">inventory_2</span>
            <span>Packages</span>
          </Link>
        </li>
        <li>
          <Link href="/admin/resources" className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200 scale-95 active:scale-90 hover:text-primary">
            <span className="material-symbols-outlined">hotel</span>
            <span>Hotels</span>
          </Link>
        </li>
        <li>
          <Link href="/admin/resources" className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200 scale-95 active:scale-90 hover:text-primary">
            <span className="material-symbols-outlined">directions_car</span>
            <span>Vehicles</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200 scale-95 active:scale-90 hover:text-primary">
            <span className="material-symbols-outlined">group</span>
            <span>Users</span>
          </Link>
        </li>
        <li>
          <Link href="/admin/messages" className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200 scale-95 active:scale-90 hover:text-primary">
            <span className="material-symbols-outlined">forum</span>
            <span>Messages</span>
          </Link>
        </li>
      </ul>
      <div className="mt-auto pt-lg border-t border-outline-variant">
        <div className="flex items-center gap-md px-sm">
          <img
            alt="Admin profile avatar"
            className="w-8 h-8 rounded-full"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM4lqfW9M68zDUYPew28x01jftGFd5jjBSHEld0UuqQVjIJ0VUUAd69cdEmxlJQpZmd2bhGjaRrihWjxWtp14YYrk3CdUfS8feg24BV1lhsmQ-nooHGhFKxZZrzvH3KiscXpgM_p12NWf3wdxl5Prgqnuf4-_YVkElQuWZ_KhHVXOZGLW7QdItVEgM8VVsQY7xEw3ZH4qSss7gjZjhiWKSnUaCbzKD4ZGTGy_JO1IJnQalphX6Tel1Vf7B8d0bXXAZLLoZIcojnOI"
          />
          <div>
            <p className="font-title-md text-title-md text-on-surface">Admin User</p>
            <p className="font-label-md text-label-md text-on-surface-variant">System Administrator</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
