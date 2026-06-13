

import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  User,
  History,
  Heart,
  MapPin,
  Settings,
} from "lucide-react";

const DashboardSidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      name: "Profile",
      path: "/account",
      icon: User,
    },
    {
      name: "Orders",
      path: "/order",
      icon: History,
    },
    {
      name: "Wishlist",
      path: "/MyWishlist",
      icon: Heart,
    },
    {
      name: "Addresses",
      path: "/addresses",
      icon: MapPin,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="fixed top-20 left-0 w-64 h-[calc(100vh-80px)] bg-white border-r z-40 overflow-y-auto p-6">

      <h2 className="text-2xl font-serif mb-8">
        My Account
      </h2>

      <div className="space-y-2">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded transition ${
                location.pathname === item.path
                  ? "bg-amber-100 text-amber-900"
                  : "hover:bg-gray-100"
              }`}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}

      </div>
    </aside>
  );
};

export default DashboardSidebar;