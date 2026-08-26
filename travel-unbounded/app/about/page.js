import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      {/* =========================
          ABOUT HERO
      ========================== */}

      <section className="about-hero">
        <Image
          src="/images/kerala.jpg"
          alt="Travel Unbounded"
          fill
          priority
          sizes="100vw"
        />

        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <span>ABOUT TRAVEL UNBOUNDED</span>

          <h1>India's Most Trusted Experiential Travel Experts</h1>

          <p>
            We create journeys around people, experiences and stories that stay
            with you long after you return home.
          </p>
        </div>
      </section>

      {/* =========================
          COMPANY STORY
      ========================== */}

      <section className="about-story">
        <div className="about-container">
          <div className="about-story-content">
            <span className="about-label">OUR STORY</span>

            <h2>Travel is more than a destination.</h2>

            <p>
              Travel Unbounded was born from a simple belief — that the best
              journeys aren't sold from a catalogue. They're built around the
              people taking them.
            </p>

            <p>
              Headquartered in Bangalore with offices in Kerala and Nairobi, we
              design trips that blend comfort, culture, and raw nature. Every
              destination, resort, and activity we recommend has been personally
              experienced by our team.
            </p>

            <p>
              From spotting the Big Five at dawn in the Masai Mara to cruising
              Ha Long Bay at sunset — we go where real stories are written, and
              we bring you along.
            </p>
          </div>

          <div className="about-story-image">
            <Image
              src="/images/ladakh.jpg"
              alt="Travel experience"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* =========================
          OUR LOCATIONS
      ========================== */}

      <section className="locations-section">
        <div className="section-heading">
          <span>WHERE WE ARE</span>

          <h2>Our Locations</h2>

          <p>
            Our teams across three locations help us create authentic
            experiences across India and the world.
          </p>
        </div>

        <div className="locations-grid">
          {/* Bengaluru */}

          <div className="location-card">
            <div className="location-icon">📍</div>

            <span>HEADQUARTERS</span>

            <h3>Bengaluru</h3>

            <p>
              541, 7th Main Rd, HAL 2nd Stage
              <br />
              Indiranagar, Bengaluru – 560008
              <br />
              India
            </p>
          </div>

          {/* Kochi */}

          <div className="location-card">
            <div className="location-icon">📍</div>

            <span>KERALA OFFICE</span>

            <h3>Kochi</h3>

            <p>
              LR Towers, S Janatha Road
              <br />
              Palavivatton, Kochi – 682025
              <br />
              India
            </p>
          </div>

          {/* Nairobi */}

          <div className="location-card">
            <div className="location-icon">📍</div>

            <span>KENYA OFFICE</span>

            <h3>Nairobi</h3>

            <p>
              Westpark Towers, Muthithi Road
              <br />
              Nairobi, P.O. Box 6950
              <br />
              Postal Code 00100
              <br />
              Kenya
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          WHY CHOOSE US
      ========================== */}

      <section className="why-section">
        <div className="section-heading">
          <span>WHY TRAVEL UNBOUNDED</span>

          <h2>Why Choose Us?</h2>

          <p>
            We believe your journey should be personal, carefully planned and
            completely unforgettable.
          </p>
        </div>

        <div className="why-grid">
          {/* Point 1 */}

          <div className="why-card">
            <div className="why-number">01</div>

            <h3>Personally Vetted Experiences</h3>

            <p>
              Every destination, hotel and experience we recommend is carefully
              researched and personally experienced by our team.
            </p>
          </div>

          {/* Point 2 */}

          <div className="why-card">
            <div className="why-number">02</div>

            <h3>Local Guides</h3>

            <p>
              Travel with knowledgeable local guides who help you discover the
              culture, people and hidden gems of every destination.
            </p>
          </div>

          {/* Point 3 */}

          <div className="why-card">
            <div className="why-number">03</div>

            <h3>Custom Itineraries</h3>

            <p>
              No two travellers are the same. We create flexible, personalised
              itineraries around your interests, comfort and budget.
            </p>
          </div>

          {/* Point 4 */}

          <div className="why-card">
            <div className="why-number">04</div>

            <h3>24x7 Support</h3>

            <p>
              From planning your trip to returning home, our team is available
              to support you whenever you need us.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}

      <section className="about-cta">
        <div>
          <span>YOUR NEXT ADVENTURE AWAITS</span>

          <h2>Let's create your perfect journey.</h2>

          <p>
            Tell us what kind of experience you're looking for and we'll create
            a journey around you.
          </p>

          <Link href="/contact" className="cta-button">
            Plan Your Trip
          </Link>
        </div>
      </section>
    </main>
  );
}
