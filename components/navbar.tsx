"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <button
        onClick={toggleMenu}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        className={` ${
          !isMenuOpen && "hidden"
        } w-[45%] absolute right-2 md:block md:relative md:w-full`}
      >
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
          <li>
            <Link
              href="/"
              className={`block py-2 px-3 rounded md:border-0 md:hover:text-blue-700 md:p-0 ${
                pathname === "/"
                  ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700"
                  : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/author"
              className={`block py-2 px-3 rounded md:border-0 md:hover:text-blue-700 md:p-0 ${
                pathname === "/author"
                  ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700"
                  : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent"
              }`}
            >
              Author
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
