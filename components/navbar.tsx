"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import AernStoreLogo from "./icons/aernstore";

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Use useCallback to memoize the scroll handler
  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;

    // Show navbar when scrolling up or at the very top
    const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

    setIsVisible(visible);
    setPrevScrollPos(currentScrollPos);

    // Set scrolled state for appearance
    setIsScrolled(currentScrollPos > 10);
  }, [prevScrollPos]);

  useEffect(() => {
    // Set initial scroll position
    setPrevScrollPos(window.scrollY);

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  if (pathname?.startsWith("/feedback")) {
    return null;
  }

  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0 border-b transition-all duration-300 
      ${isVisible ? "translate-y-0" : "-translate-y-full"}
      ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/70 backdrop-blur-md border-gray-200/50 dark:border-gray-600/50"
          : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-600"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center w-10 h-10 space-x-3">
          <AernStoreLogo />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <Link href="https://wa.me/6282334039853">
            <button
              type="button"
              className="text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-primary dark:focus:ring-primary/70"
            >
              Gabung
            </button>
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
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
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul
            className={`flex flex-col p-4 md:p-0 mt-4 font-normal border rounded-lg 
            ${
              isScrolled
                ? "border-gray-100/80 bg-gray-50/80 md:bg-transparent"
                : "border-gray-100 bg-gray-50 md:bg-white"
            }
            md:space-x-8 md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700`}
          >
            <li>
              <Link
                href="#home"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="#features"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors"
              >
                Fitur
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                href="/feedback"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors"
              >
                Kritik & Saran
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
