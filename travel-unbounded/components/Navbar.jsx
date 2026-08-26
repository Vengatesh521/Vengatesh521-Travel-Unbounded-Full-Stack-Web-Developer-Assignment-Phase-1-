"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md">
      {/* Navbar Container */}
      <div className="mx-auto flex min-h-[72px] max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 flex-col leading-none"
        >
          <span className="text-[9px] font-semibold tracking-[2.5px] text-gray-500 sm:text-[10px] sm:tracking-[3px]">
            TRAVEL
          </span>

          <strong className="mt-1 text-[18px] tracking-[0.8px] text-gray-900 sm:text-xl">
            UNBOUNDED
          </strong>
        </Link>

        {/* Desktop / Tablet Navigation */}
        <nav className="hidden items-center gap-5 md:flex lg:gap-8">
          <Link
            href="/"
            className="text-sm font-semibold text-gray-700 transition-colors hover:text-gray-950 lg:text-[15px]"
          >
            Home
          </Link>

          <Link
            href="/#india"
            className="text-sm font-semibold text-gray-700 transition-colors hover:text-gray-950 lg:text-[15px]"
          >
            India
          </Link>

          <Link
            href="/#international"
            className="text-sm font-semibold text-gray-700 transition-colors hover:text-gray-950 lg:text-[15px]"
          >
            International
          </Link>

          <Link
            href="/about"
            className="text-sm font-semibold text-gray-700 transition-colors hover:text-gray-950 lg:text-[15px]"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm font-semibold text-gray-700 transition-colors hover:text-gray-950 lg:text-[15px]"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop / Tablet CTA */}
        <Link
          href="/contact"
          className="hidden rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-gray-700 md:block lg:px-5 lg:py-3"
        >
          Plan Your Trip
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 bg-white transition hover:bg-gray-50 md:hidden"
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-0.5 w-full bg-gray-900 transition ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-full bg-gray-900 transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-full bg-gray-900 transition ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-[1200px] flex-col px-4 pb-5 sm:px-6">
            <Link
              href="/"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-[15px] font-semibold text-gray-700 transition hover:text-gray-950"
            >
              Home
            </Link>

            <Link
              href="/#india"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-[15px] font-semibold text-gray-700 transition hover:text-gray-950"
            >
              India
            </Link>

            <Link
              href="/#international"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-[15px] font-semibold text-gray-700 transition hover:text-gray-950"
            >
              International
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-[15px] font-semibold text-gray-700 transition hover:text-gray-950"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-[15px] font-semibold text-gray-700 transition hover:text-gray-950"
            >
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-4 rounded-lg bg-gray-900 px-5 py-3.5 text-center text-sm font-bold text-white transition hover:bg-gray-700"
            >
              Plan Your Trip
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
