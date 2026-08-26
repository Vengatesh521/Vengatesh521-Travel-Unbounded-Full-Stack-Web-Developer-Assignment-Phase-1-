import BookingForm from "@/components/BookingForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-bold tracking-[0.2em] text-gray-500">
            GET IN TOUCH
          </span>

          <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Plan Your Journey
          </h1>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Share your travel requirements with us and we'll help you create the
            perfect experience.
          </p>
        </div>

        <BookingForm />
      </div>
    </main>
  );
}
