import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      {/* =========================
          ABOUT HERO
      ========================== */}
      <section className="relative flex min-h-[500px] items-center overflow-hidden">
        <Image
          src="/images/kerala.jpg"
          alt="Travel Unbounded"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 z-10 bg-black/55" />

        <div className="relative z-20 mx-auto w-full max-w-[1100px] px-[30px] py-20 text-white max-sm:px-5 max-sm:py-[60px]">
          <span className="mb-[18px] block text-[13px] font-bold tracking-[2px]">
            ABOUT TRAVEL UNBOUNDED
          </span>

          <h1 className="mb-5 max-w-[850px] text-[clamp(40px,6vw,64px)] font-bold leading-[1.1] max-sm:text-[40px]">
            India's Most Trusted Experiential Travel Experts
          </h1>

          <p className="max-w-[650px] text-[19px] leading-[1.7] max-sm:text-[17px]">
            We create journeys around people, experiences and stories that stay
            with you long after you return home.
          </p>
        </div>
      </section>

      {/* =========================
          COMPANY STORY
      ========================== */}
      <section className="bg-white px-[30px] py-[100px] max-sm:px-5 max-sm:py-[70px]">
        <div className="mx-auto grid max-w-[1150px] grid-cols-2 items-center gap-[70px] max-[900px]:grid-cols-1 max-[900px]:gap-10">
          {/* Content */}
          <div>
            <span className="mb-3 block text-[13px] font-bold tracking-[2px]">
              OUR STORY
            </span>

            <h2 className="mb-[25px] text-[42px] font-bold leading-[1.15] text-gray-900 max-sm:text-[32px]">
              Travel is more than a destination.
            </h2>

            <p className="mb-5 text-[17px] leading-[1.8] text-gray-500 max-sm:text-base">
              Travel Unbounded was born from a simple belief — that the best
              journeys aren't sold from a catalogue. They're built around the
              people taking them.
            </p>

            <p className="mb-5 text-[17px] leading-[1.8] text-gray-500 max-sm:text-base">
              Headquartered in Bangalore with offices in Kerala and Nairobi, we
              design trips that blend comfort, culture, and raw nature. Every
              destination, resort, and activity we recommend has been personally
              experienced by our team.
            </p>

            <p className="text-[17px] leading-[1.8] text-gray-500 max-sm:text-base">
              From spotting the Big Five at dawn in the Masai Mara to cruising
              Ha Long Bay at sunset — we go where real stories are written, and
              we bring you along.
            </p>
          </div>

          {/* Image */}
          <div className="relative min-h-[500px] overflow-hidden rounded-[14px] max-[900px]:min-h-[400px] max-sm:min-h-[350px]">
            <Image
              src="/images/ladakh.jpg"
              alt="Travel experience"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================
          LOCATIONS
      ========================== */}
      <section className="bg-slate-50 px-[30px] py-[100px] max-sm:px-5 max-sm:py-[70px]">
        {/* Heading */}
        <div className="mx-auto mb-[50px] max-w-[700px] text-center">
          <span className="mb-3 block text-[13px] font-bold tracking-[2px]">
            WHERE WE ARE
          </span>

          <h2 className="mb-[15px] text-[42px] font-bold text-gray-900 max-md:text-[36px] max-sm:text-[30px]">
            Our Locations
          </h2>

          <p className="text-[17px] leading-[1.7] text-gray-500">
            Our teams across three locations help us create authentic
            experiences across India and the world.
          </p>
        </div>

        {/* Locations */}
        <div className="mx-auto grid max-w-[1150px] grid-cols-3 gap-[25px] max-[900px]:grid-cols-2 max-sm:grid-cols-1">
          {/* Bengaluru */}
          <div className="rounded-xl bg-white p-[35px_30px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)]">
            <div className="mb-5 text-[30px]">📍</div>

            <span className="mb-2 block text-xs font-bold tracking-[1.5px]">
              HEADQUARTERS
            </span>

            <h3 className="mb-[18px] text-[28px] font-bold text-gray-900">
              Bengaluru
            </h3>

            <p className="text-gray-500 leading-[1.8]">
              541, 7th Main Rd, HAL 2nd Stage
              <br />
              Indiranagar, Bengaluru – 560008
              <br />
              India
            </p>
          </div>

          {/* Kochi */}
          <div className="rounded-xl bg-white p-[35px_30px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)]">
            <div className="mb-5 text-[30px]">📍</div>

            <span className="mb-2 block text-xs font-bold tracking-[1.5px]">
              KERALA OFFICE
            </span>

            <h3 className="mb-[18px] text-[28px] font-bold text-gray-900">
              Kochi
            </h3>

            <p className="text-gray-500 leading-[1.8]">
              LR Towers, S Janatha Road
              <br />
              Palavivatton, Kochi – 682025
              <br />
              India
            </p>
          </div>

          {/* Nairobi */}
          <div className="rounded-xl bg-white p-[35px_30px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)]">
            <div className="mb-5 text-[30px]">📍</div>

            <span className="mb-2 block text-xs font-bold tracking-[1.5px]">
              KENYA OFFICE
            </span>

            <h3 className="mb-[18px] text-[28px] font-bold text-gray-900">
              Nairobi
            </h3>

            <p className="text-gray-500 leading-[1.8]">
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
      <section className="bg-white px-[30px] py-[100px] max-sm:px-5 max-sm:py-[70px]">
        <div className="mx-auto mb-[50px] max-w-[700px] text-center">
          <span className="mb-3 block text-[13px] font-bold tracking-[2px]">
            WHY TRAVEL UNBOUNDED
          </span>

          <h2 className="mb-[15px] text-[42px] font-bold text-gray-900 max-md:text-[36px] max-sm:text-[30px]">
            Why Choose Us?
          </h2>

          <p className="text-[17px] leading-[1.7] text-gray-500">
            We believe your journey should be personal, carefully planned and
            completely unforgettable.
          </p>
        </div>

        <div className="mx-auto grid max-w-[1150px] grid-cols-4 gap-[25px] max-[900px]:grid-cols-2 max-sm:grid-cols-1">
          {[
            {
              number: "01",
              title: "Personally Vetted Experiences",
              text: "Every destination, hotel and experience we recommend is carefully researched and personally experienced by our team.",
            },
            {
              number: "02",
              title: "Local Guides",
              text: "Travel with knowledgeable local guides who help you discover the culture, people and hidden gems of every destination.",
            },
            {
              number: "03",
              title: "Custom Itineraries",
              text: "No two travellers are the same. We create flexible, personalised itineraries around your interests, comfort and budget.",
            },
            {
              number: "04",
              title: "24x7 Support",
              text: "From planning your trip to returning home, our team is available to support you whenever you need us.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="rounded-xl border border-gray-200 p-[30px] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-5 text-sm font-bold text-gray-500">
                {item.number}
              </div>

              <h3 className="mb-[15px] text-[21px] font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-500 leading-[1.7]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="bg-gray-900 px-[30px] py-[100px] text-center text-white max-sm:px-5 max-sm:py-[70px]">
        <div className="mx-auto max-w-[700px]">
          <span className="text-[13px] font-bold tracking-[2px]">
            YOUR NEXT ADVENTURE AWAITS
          </span>

          <h2 className="my-[15px] text-[45px] font-bold leading-[1.2] max-sm:text-[34px]">
            Let's create your perfect journey.
          </h2>

          <p className="mb-[30px] text-lg leading-[1.7] text-gray-300">
            Tell us what kind of experience you're looking for and we'll create
            a journey around you.
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
