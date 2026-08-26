import BookingForm from "@/components/BookingForm";

export default function ContactPage() {
  return (
    <main>
      <section className="bg-gray-900 px-5 py-20 text-center text-white">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-300">
          Contact Us
        </span>

        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          Plan Your Next Journey
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-300">
          Share your travel requirements with us and our travel experts will
          create a personalised experience for you.
        </p>
      </section>

      <BookingForm />
    </main>
  );
}
