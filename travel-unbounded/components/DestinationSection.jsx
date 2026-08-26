import DestinationCard from "@/components/DestinationCard";

export default function DestinationSection({
  title,
  subtitle,
  description,
  destinations,
  className = "",
}) {
  return (
    <section
      className={`mx-auto max-w-[1200px] px-[30px] py-[90px] max-md:px-5 max-md:py-[65px] ${className}`}
    >
      {/* Heading */}
      <div className="mx-auto mb-[50px] max-w-[700px] text-center">
        <span className="mb-3 block text-[13px] font-bold uppercase tracking-[2px]">
          {subtitle}
        </span>

        <h2 className="mb-[15px] text-[42px] font-bold text-gray-900 max-md:text-[36px] max-sm:text-[30px]">
          {title}
        </h2>

        <p className="text-[17px] leading-[1.7] text-gray-500">{description}</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-7 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </section>
  );
}
