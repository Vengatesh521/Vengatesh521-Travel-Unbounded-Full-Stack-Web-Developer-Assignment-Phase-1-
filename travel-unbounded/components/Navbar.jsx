"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-[1000] w-full border-b border-gray-200 bg-white/95 backdrop-blur-[10px]">
      {/* Main Navbar */}
      <div className="mx-auto flex h-[78px] max-w-[1200px] items-center justify-between gap-[30px] px-[30px] max-md:h-[70px] max-md:px-5">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col leading-none no-underline"
          onClick={closeMenu}
        >
          <span className="text-[11px] font-semibold tracking-[3px] text-gray-500">
            TRAVEL
          </span>

          <strong className="mt-[5px] text-xl tracking-[1px] text-gray-900">
            UNBOUNDED
          </strong>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-[30px] min-[801px]:flex">
          <Link
            href="/"
            className="relative text-[15px] font-semibold text-gray-700 transition hover:text-gray-900"
          >
            Home
          </Link>

          <Link
            href="/#india"
            className="relative text-[15px] font-semibold text-gray-700 transition hover:text-gray-900"
          >
            India
          </Link>

          <Link
            href="/#international"
            className="relative text-[15px] font-semibold text-gray-700 transition hover:text-gray-900"
          >
            International
          </Link>

          <Link
            href="/about"
            className="relative text-[15px] font-semibold text-gray-700 transition hover:text-gray-900"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="relative text-[15px] font-semibold text-gray-700 transition hover:text-gray-900"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden rounded-md bg-gray-900 px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-gray-700 min-[801px]:block"
        >
          Plan Your Trip
        </Link>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="block h-[42px] w-[42px] border-0 bg-transparent p-2 min-[801px]:hidden"
        >
          <span className="mx-auto my-[5px] block h-[2px] w-6 bg-gray-900" />
          <span className="mx-auto my-[5px] block h-[2px] w-6 bg-gray-900" />
          <span className="mx-auto my-[5px] block h-[2px] w-6 bg-gray-900" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="flex flex-col border-t border-gray-200 bg-white px-5 pb-6 pt-2 min-[801px]:hidden">
          <Link
            href="/"
            onClick={closeMenu}
            className="border-b border-gray-100 py-[15px] text-[15px] font-semibold text-gray-700"
          >
            Home
          </Link>

          <Link
            href="/#india"
            onClick={closeMenu}
            className="border-b border-gray-100 py-[15px] text-[15px] font-semibold text-gray-700"
          >
            India
          </Link>

          <Link
            href="/#international"
            onClick={closeMenu}
            className="border-b border-gray-100 py-[15px] text-[15px] font-semibold text-gray-700"
          >
            International
          </Link>

          <Link
            href="/about"
            onClick={closeMenu}
            className="border-b border-gray-100 py-[15px] text-[15px] font-semibold text-gray-700"
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="border-b border-gray-100 py-[15px] text-[15px] font-semibold text-gray-700"
          >
            Contact
          </Link>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-[15px] rounded-md bg-gray-900 px-5 py-[13px] text-center font-bold text-white"
          >
            Plan Your Trip
          </Link>
        </nav>
      )}
    </header>
  );
}
