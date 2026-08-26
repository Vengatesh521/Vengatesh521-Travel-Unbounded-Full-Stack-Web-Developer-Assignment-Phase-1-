import Image from "next/image";
import Link from "next/link";

export default function DestinationCard({ destination }) {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
      {/* Image */}
      <div className="relative h-[240px]">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-[13px] font-bold uppercase tracking-[1px]">
          {destination.country}
        </span>

        <h3 className="my-2 mb-3 text-[25px] font-bold text-gray-900">
          {destination.name}
        </h3>

        <p className="mb-[22px] min-h-[75px] text-gray-500 leading-[1.6]">
          {destination.description}
        </p>

        {/* Bottom */}
        <div className="flex items-center justify-between gap-[15px]">
          {/* Price */}
          <div>
            <small className="mb-[5px] block text-gray-500">
              Starting from
            </small>

            <strong className="block text-[19px] text-gray-900">
              ₹{destination.price.toLocaleString("en-IN")}
            </strong>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <Link
              href={`/destinations/${destination.id}`}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-[5px] border border-gray-300 bg-white px-[14px] py-[10px] text-[13px] font-semibold text-gray-900 transition hover:border-gray-400 hover:bg-gray-100"
            >
              View Details
            </Link>

            <Link
              href={`/contact?destination=${encodeURIComponent(
                destination.name,
              )}`}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-[5px] border border-gray-900 bg-gray-900 px-[14px] py-[10px] text-[13px] font-semibold text-white transition hover:border-gray-700 hover:bg-gray-700"
            >
              Enquire
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
