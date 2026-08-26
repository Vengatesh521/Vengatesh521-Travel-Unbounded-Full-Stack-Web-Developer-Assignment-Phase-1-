import Image from "next/image";
import Link from "next/link";

export default function DestinationCard({ destination }) {
  return (
    <article className="destination-card">
      {/* Image */}
      <div className="destination-image">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="destination-content">
        <span className="destination-country">{destination.country}</span>

        <h3>{destination.name}</h3>

        <p>{destination.description}</p>

        {/* Bottom */}
        <div className="destination-bottom">
          {/* Price */}
          <div className="destination-price">
            <small>Starting from</small>

            <strong>₹{destination.price.toLocaleString("en-IN")}</strong>
          </div>

          {/* Buttons */}
          <div className="destination-actions">
            <Link
              href={`/destinations/${destination.id}`}
              className="destination-details-button"
            >
              View Details
            </Link>

            <Link
              href={`/contact?destination=${encodeURIComponent(
                destination.name,
              )}`}
              className="destination-button"
            >
              Enquire
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
