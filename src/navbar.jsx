import { useState } from "react";
import { Bell, Search } from "lucide-react";

export const Navbar=()=> {
  const [active, setActive] = useState("Dashboard");

  const links = ["Dashboard", "Team", "Projects", "Calendar"];

  return (
    <nav className="bg-[#0f172a] text-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center gap-6">
        <div className="text-indigo-400 text-2xl font-bold">≋</div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-4">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => setActive(link)}
              className={`px-3 py-1 rounded-lg transition ${
                active === link
                  ? "bg-black text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      </div>

      {/* Middle: Search */}
      <div className="flex-1 max-w-md mx-6 hidden md:block">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-3 py-2 rounded-md bg-[#1e293b] text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Right: Notification + Profile */}
      <div className="flex items-center gap-4">
        <Bell className="text-gray-400 hover:text-white cursor-pointer" />
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-9 h-9 rounded-full border-2 border-gray-600"
        />
      </div>
    </nav>
  );
}


