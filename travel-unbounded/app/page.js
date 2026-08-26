import Image from "next/image";
import Link from "next/link";
import {
  indiaDestinations,
  internationalDestinations,
} from "@/data/destinations";

function DestinationCard({ destination }) {
  return (
    <div className="destination-card">
      <div className="destination-image">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="destination-content">
        <span className="destination-country">{destination.country}</span>

        <h3>{destination.name}</h3>

        <p>{destination.description}</p>

        <div className="destination-bottom">
          <div>
            <small>Starting from</small>
            <strong>₹{destination.price.toLocaleString("en-IN")}</strong>
          </div>

          <Link href="/contact" className="destination-button">
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* =========================
          HERO SECTION
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
      <section className="destinations-section" id="india">
        <div className="section-heading">
          <span>EXPLORE INDIA</span>

          <h2>Discover Incredible India</h2>

          <p>
            From peaceful backwaters to majestic mountains, explore India's most
            beautiful destinations.
          </p>
        </div>

        <div className="destination-grid">
          {indiaDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </section>

      {/* =========================
          INTERNATIONAL
      ========================== */}
      <section
        className="destinations-section international-section"
        id="international"
      >
        <div className="section-heading">
          <span>EXPLORE THE WORLD</span>

          <h2>International Destinations</h2>

          <p>
            Go beyond borders and discover amazing experiences around the world.
          </p>
        </div>

        <div className="destination-grid">
          {internationalDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </section>

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
