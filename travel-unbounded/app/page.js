import Link from "next/link";

import Hero from "@/components/Hero";
import DestinationSection from "@/components/DestinationSection";

import {
  indiaDestinations,
  internationalDestinations,
} from "@/data/destinations";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <Hero />

      {/* INDIA */}
      <div id="india">
        <DestinationSection
          subtitle="Explore India"
          title="Discover Incredible India"
          description="From peaceful backwaters to majestic mountains, explore India's most beautiful destinations."
          destinations={indiaDestinations}
        />
      </div>

      {/* INTERNATIONAL */}
      <div id="international">
        <DestinationSection
          subtitle="Explore The World"
          title="International Destinations"
          description="Go beyond borders and discover amazing experiences around the world."
          destinations={internationalDestinations}
          className="!max-w-none bg-slate-50"
        />
      </div>

      {/* CTA */}
      <section className="bg-gray-900 px-[30px] py-[100px] text-center text-white max-sm:px-5 max-sm:py-[70px]">
        <div className="mx-auto max-w-[700px]">
          <span className="text-[13px] font-bold tracking-[2px]">
            YOUR JOURNEY STARTS HERE
          </span>

          <h2 className="my-[15px] text-[45px] font-bold max-sm:text-[34px]">
            Ready to explore the world?
          </h2>

          <p className="mb-[30px] text-lg leading-[1.7] text-gray-300">
            Tell us where you want to go and we'll help you plan an
            unforgettable journey.
          </p>

          <Link
            href="/contact"
            className="inline-block rounded-md bg-white px-[30px] py-[15px] font-bold text-gray-900 transition hover:-translate-y-0.5"
          >
            Plan Your Trip
          </Link>
        </div>
      </section>
    </main>
  );
}
