import React, { useState } from "react";
import {
  MenuAlt3Icon,
  XIcon,
  HomeIcon,
  ClipboardListIcon,
  ShoppingCartIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/outline";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-customwhite">
      <div
        className={`fixed top-0 left-0 z-20 h-full bg-customwhite text-black shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:relative sm:translate-x-0 sm:w-64 rounded-r-lg`}
      >
        <div className="flex items-center justify-between p-4 text-lg font-semibold border-b">
          <span>Qest</span>
          <button
            onClick={() => setIsOpen(false)}
            className="sm:hidden text-black hover:text-red-500 transition"
          >
            <XIcon className="h-6 w-6" />
          </button>
        </div>

        <ul className="space-y-2 p-4">
          <li>
            <a
              href="#"
              className="flex items-center gap-4 rounded-md p-2 hover:bg-customblack hover:text-white transition"
            >
              <HomeIcon className="h-5 w-5" />
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-4 rounded-md p-2 hover:bg-customblack hover:text-white transition"
            >
              <ClipboardListIcon className="h-5 w-5" />
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-4 rounded-md p-2 hover:bg-customblack hover:text-white transition"
            >
              <ShoppingCartIcon className="h-5 w-5" />
              Cart
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-4 rounded-md p-2 hover:bg-customblack hover:text-white transition"
            >
              <UsersIcon className="h-5 w-5" />
              Customers
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-4 rounded-md p-2 hover:bg-customblack hover:text-white transition"
            >
              <ChartBarIcon className="h-5 w-5" />
              Analytics
            </a>
          </li>
        </ul>
      </div>

      <div className="flex-1 bg-customwhite">
        <div className="bg-gray-100 p-4 shadow-md sm:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-md bg-customwhite p-2 text-black flex items-center"
          >
            <MenuAlt3Icon className="h-6 w-6" />
          </button>
        </div>

        <div className="p-1">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
