import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company */}
        <div className="footer-company">
          <Link href="/" className="footer-logo">
            <span>TRAVEL</span>
            <strong>UNBOUNDED</strong>
          </Link>

          <p>
            Discover extraordinary destinations, create unforgettable memories,
            and experience the world your way.
          </p>

          <Link href="/contact" className="footer-cta">
            Plan Your Trip
          </Link>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/#india">India</Link>
          <Link href="/#international">International</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Destinations */}
        <div className="footer-column">
          <h3>Popular Destinations</h3>

          <Link href="/#india">Kerala</Link>
          <Link href="/#india">Himachal Pradesh</Link>
          <Link href="/#india">Ladakh</Link>
          <Link href="/#india">Goa</Link>
          <Link href="/#international">Sri Lanka</Link>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <p>
            <strong>Email</strong>
            <br />
            hello@travelunbounded.com
          </p>

          <p>
            <strong>Phone</strong>
            <br />
            +91 98765 43210
          </p>

          <p>
            <strong>Location</strong>
            <br />
            India
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Travel Unbounded. All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
