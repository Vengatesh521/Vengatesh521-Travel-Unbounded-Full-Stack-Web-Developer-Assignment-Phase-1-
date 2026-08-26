import DestinationCard from "@/components/DestinationCard";

export default function DestinationSection({
  title,
  subtitle,
  description,
  destinations,
  className = "",
}) {
  return (
    <section className={`destinations-section ${className}`}>
      <div className="section-heading">
        <span>{subtitle}</span>

        <h2>{title}</h2>

        <p>{description}</p>
      </div>

      <div className="destination-grid">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </section>
  );
}
