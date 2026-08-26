import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Footer Main */}
      <div className="mx-auto grid max-w-[1200px] grid-cols-[2fr_1fr_1fr_1.2fr] gap-[50px] px-[30px] py-[75px] max-md:grid-cols-2 max-md:gap-x-[30px] max-md:gap-y-[45px] max-md:px-5 max-md:py-[60px] max-sm:grid-cols-1 max-sm:gap-[35px]">
        {/* Company */}
        <div className="max-w-[330px] max-md:col-span-full max-md:max-w-none max-sm:col-span-auto">
          <Link
            href="/"
            className="mb-[22px] inline-flex flex-col leading-none no-underline"
          >
            <span className="text-[11px] font-semibold tracking-[3px] text-gray-400">
              TRAVEL
            </span>

            <strong className="mt-[5px] text-[22px] tracking-[1px] text-white">
              UNBOUNDED
            </strong>
          </Link>

          <p className="mb-[25px] text-[15px] leading-[1.7] text-gray-400">
            Discover extraordinary destinations, create unforgettable memories,
            and experience the world your way.
          </p>

          <Link
            href="/contact"
            className="inline-block rounded-md bg-white px-5 py-3 text-sm font-bold text-gray-900 transition duration-300 hover:-translate-y-0.5"
          >
            Plan Your Trip
          </Link>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-[13px]">
          <h3 className="mb-[10px] text-base font-bold text-white">
            Quick Links
          </h3>

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

        {/* Popular Destinations */}
        <div className="flex flex-col gap-[13px]">
          <h3 className="mb-[10px] text-base font-bold text-white">
            Popular Destinations
          </h3>

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

        {/* Contact */}
        <div className="flex flex-col gap-[13px]">
          <h3 className="mb-[10px] text-base font-bold text-white">
            Contact Us
          </h3>

          <p className="text-sm leading-[1.6] text-gray-400">
            <strong className="text-white">Email</strong>
            <br />
            hello@travelunbounded.com
          </p>

          <p className="text-sm leading-[1.6] text-gray-400">
            <strong className="text-white">Phone</strong>
            <br />
            +91 98765 43210
          </p>

          <p className="text-sm leading-[1.6] text-gray-400">
            <strong className="text-white">Location</strong>
            <br />
            India
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-5 border-t border-gray-700 px-[30px] py-[22px] max-md:flex-col max-md:px-5 max-md:text-center">
        <p className="m-0 text-[13px] text-gray-400">
          © {new Date().getFullYear()} Travel Unbounded. All rights reserved.
        </p>

        <div className="flex gap-5 max-sm:flex-col max-sm:gap-[10px]">
          <Link
            href="/privacy"
            className="text-[13px] text-gray-400 hover:text-white"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="text-[13px] text-gray-400 hover:text-white"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
