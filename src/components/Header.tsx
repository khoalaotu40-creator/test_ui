import { Bell, Settings } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-surface border-b border-outline-variant shadow-sm flex justify-between items-center w-full px-6 h-16 max-w-[1440px] mx-auto shrink-0 z-50">
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-black text-primary">JurisGraph</h1>
        <nav className="hidden md:flex gap-6 h-full items-center">
          <a
            className="text-primary font-bold border-b-2 border-primary pb-1 h-full flex items-center pt-1 text-sm"
            href="#"
          >
            Search history
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors h-full flex items-center text-sm font-medium"
            href="#"
          >
            Data sources
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-variant">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-variant">
          <Settings className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 rounded-full bg-surface-variant border border-outline-variant overflow-hidden cursor-pointer ml-2">
          <img
            alt="User profile"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbqPVGYu7r8tIzw6yS7EE9-uXsbDDNj37Tfack5ooTBy_XliH2d3Ijy1YvjOElhdG-PSzRe0ywM6jL-NbDuHwkQxUgK8fYL1NVPMMLsPyUOmOIC7MQk3kCXkcIm_nSSRos15V_aM3_6pRcAOqJnOgUe-vFtT1SUs-5qmUL8rDcd_sA12YtfQQk4PzPbLIh3OW5i3PHSHuS-pRnOM5YgrFHpkQ4LuqGSUujpkuojLB3BLGFbn5cusFNmw"
          />
        </div>
      </div>
    </header>
  );
}
