import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      {/* Footer Main */}
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-5 py-14 sm:px-6 sm:py-16 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-[2fr_1fr_1fr_1.2fr] lg:gap-10 lg:px-8 lg:py-[70px]">
        {/* Company */}
        <div className="md:col-span-2 lg:col-span-1">
          <Link href="/" className="mb-5 inline-flex flex-col leading-none">
            <span className="text-[10px] font-semibold tracking-[3px] text-gray-500">
              TRAVEL
            </span>

            <strong className="mt-1 text-[21px] tracking-[1px] text-white">
              UNBOUNDED
            </strong>
          </Link>

          <p className="mb-6 max-w-[420px] text-sm leading-7 text-gray-400 sm:text-[15px]">
            Discover extraordinary destinations, create unforgettable memories,
            and experience the world your way.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-bold text-gray-900 transition-all hover:-translate-y-0.5 hover:bg-gray-100"
          >
            Plan Your Trip
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-white">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              About Us
            </Link>

            <Link
              href="/#india"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              India
            </Link>

            <Link
              href="/#international"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              International
            </Link>

            <Link
              href="/contact"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Popular Destinations */}
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-white">
            Popular Destinations
          </h3>

          <div className="flex flex-col gap-3">
            <Link
              href="/#india"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              Kerala
            </Link>

            <Link
              href="/#india"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              Himachal Pradesh
            </Link>

            <Link
              href="/#india"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              Ladakh
            </Link>

            <Link
              href="/#india"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              Goa
            </Link>

            <Link
              href="/#international"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              Sri Lanka
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-white">
            Contact Us
          </h3>

          <div className="flex flex-col gap-4">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Email
              </p>

              <a
                href="mailto:hello@travelunbounded.com"
                className="break-all text-sm text-gray-400 transition hover:text-white"
              >
                hello@travelunbounded.com
              </a>
            </div>

            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Phone
              </p>

              <a
                href="tel:+919876543210"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                +91 98765 43210
              </a>
            </div>

            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Location
              </p>

              <p className="text-sm text-gray-400">India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-5 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="text-center text-xs leading-5 text-gray-500 md:text-left sm:text-[13px]">
            © {new Date().getFullYear()} Travel Unbounded. All rights reserved.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
            <Link
              href="/privacy"
              className="text-xs text-gray-500 transition hover:text-white sm:text-[13px]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-gray-500 transition hover:text-white sm:text-[13px]"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
