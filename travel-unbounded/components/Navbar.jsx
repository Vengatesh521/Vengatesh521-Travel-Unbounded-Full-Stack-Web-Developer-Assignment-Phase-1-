"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="navbar-logo" onClick={closeMenu}>
          <span>TRAVEL</span>
          <strong>UNBOUNDED</strong>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-links">
          <Link href="/">Home</Link>
          <Link href="/#india">India</Link>
          <Link href="/#international">International</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Desktop CTA */}
        <Link href="/contact" className="navbar-button">
          Plan Your Trip
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="mobile-navbar">
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>

          <Link href="/#india" onClick={closeMenu}>
            India
          </Link>

          <Link href="/#international" onClick={closeMenu}>
            International
          </Link>

          <Link href="/about" onClick={closeMenu}>
            About
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>

          <Link
            href="/contact"
            className="mobile-navbar-button"
            onClick={closeMenu}
          >
            Plan Your Trip
          </Link>
        </nav>
      )}
    </header>
  );
}
