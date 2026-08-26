import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[650px] items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/kerala.jpg"
        alt="Beautiful Kerala"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />

      {/* Content */}
      <div className="relative z-20 mx-auto w-full max-w-[1200px] px-[30px] py-20 text-white max-md:px-5 max-md:py-[60px]">
        <span className="mb-5 inline-block text-sm font-bold tracking-[3px]">
          TRAVEL UNBOUNDED
        </span>

        <h1 className="mb-6 max-w-[850px] text-[clamp(42px,6vw,72px)] font-bold leading-[1.08] max-md:text-[40px]">
          India's Most Trusted
          <br />
          Experiential Travel Experts
        </h1>

        <p className="mb-9 max-w-[650px] text-xl leading-[1.7] max-md:text-[17px]">
          Discover extraordinary destinations, create unforgettable memories and
          experience the world your way.
        </p>

        <Link
          href="/contact"
          className="inline-block rounded-md bg-white px-[30px] py-[15px] font-bold text-gray-900 transition duration-300 hover:-translate-y-0.5"
        >
          Plan Your Trip
        </Link>
      </div>
    </section>
  );
}
