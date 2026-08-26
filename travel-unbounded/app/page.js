import Image from "next/image";
import Link from "next/link";

import DestinationSection from "@/components/DestinationSection";

import {
  indiaDestinations,
  internationalDestinations,
} from "@/data/destinations";

export default function Home() {
  return (
    <main>
      {/* =========================
          HERO
      ========================== */}

      <section className="hero">
        <Image
          src="/images/kerala.jpg"
          alt="Beautiful Kerala"
          fill
          priority
          sizes="100vw"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="hero-tag">TRAVEL UNBOUNDED</span>

          <h1>
            India's Most Trusted
            <br />
            Experiential Travel Experts
          </h1>

          <p>
            Discover extraordinary destinations, create unforgettable memories
            and experience the world your way.
          </p>

          <Link href="/contact" className="hero-button">
            Plan Your Trip
          </Link>
        </div>
      </section>

      {/* =========================
          INDIA DESTINATIONS
      ========================== */}

      <div id="india">
        <DestinationSection
          subtitle="Explore India"
          title="Discover Incredible India"
          description="From peaceful backwaters to majestic mountains, explore India's most beautiful destinations."
          destinations={indiaDestinations}
        />
      </div>

      {/* =========================
          INTERNATIONAL
      ========================== */}

      <div id="international">
        <DestinationSection
          className="international-section"
          subtitle="Explore The World"
          title="International Destinations"
          description="Go beyond borders and discover amazing experiences around the world."
          destinations={internationalDestinations}
        />
      </div>

      {/* =========================
          CTA
      ========================== */}

      <section className="home-cta">
        <div>
          <span>YOUR JOURNEY STARTS HERE</span>

          <h2>Ready to explore the world?</h2>

          <p>
            Tell us where you want to go and we'll help you plan an
            unforgettable journey.
          </p>

          <Link href="/contact" className="cta-button">
            Plan Your Trip
          </Link>
        </div>
      </section>
    </main>
  );
}
