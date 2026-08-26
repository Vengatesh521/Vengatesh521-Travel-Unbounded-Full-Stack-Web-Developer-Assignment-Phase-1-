"use client";

import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    countryCode: "+91",
    contactNumber: "",
    email: "",
    travelDate: "",
    people: 1,
    hotelCategory: "Standard",
    children: 0,
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Get today's date in YYYY-MM-DD format
  const getToday = () => {
    return new Date().toISOString().split("T")[0];
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error when user starts correcting field
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setStatus("");
  };

  const validateForm = () => {
    const newErrors = {};

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Please enter a valid name.";
    }

    // Phone
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required.";
    } else if (!/^[0-9]{7,15}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Enter a valid phone number (7-15 digits).";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    // Travel Date
    if (!formData.travelDate) {
      newErrors.travelDate = "Travel date is required.";
    } else if (formData.travelDate <= getToday()) {
      newErrors.travelDate = "Travel date must be in the future.";
    }

    // People
    if (!formData.people || Number(formData.people) < 1) {
      newErrors.people = "Number of people must be at least 1.";
    }

    // Children
    if (formData.children === "" || Number(formData.children) < 0) {
      newErrors.children = "Number of children cannot be negative.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("");

    // Client-side validation
    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          people: Number(formData.people),
          children: Number(formData.children),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("success");

      // Clear form after successful submission
      setFormData({
        fullName: "",
        countryCode: "+91",
        contactNumber: "",
        email: "",
        travelDate: "",
        people: 1,
        hotelCategory: "Standard",
        children: 0,
      });

      setErrors({});
    } catch (error) {
      console.error(error);

      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
            Plan Your Journey
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Send Us Your Enquiry
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Tell us about your travel plans and our travel expert will help
            create the perfect journey for you.
          </p>
        </div>

        {/* Success Message */}
        {status === "success" && (
          <div className="mb-8 rounded-lg border border-green-200 bg-green-50 p-5 text-green-800">
            <h3 className="font-bold">Enquiry submitted successfully!</h3>

            <p className="mt-1 text-sm">
              Thank you! Our travel expert will contact you within 24 hours.
            </p>
          </div>
        )}

        {/* Error Message */}
        {status === "error" && (
          <div className="mb-8 rounded-lg border border-red-200 bg-red-50 p-5 text-red-800">
            <h3 className="font-bold">Unable to submit your enquiry.</h3>

            <p className="mt-1 text-sm">
              Something went wrong. Please try again.
            </p>
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl bg-white p-6 shadow-lg sm:p-8"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Full Name */}
            <div className="sm:col-span-2">
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Full Name *
              </label>

              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`w-full rounded-lg border px-4 py-3 text-gray-900 outline-none transition focus:ring-2 ${
                  errors.fullName
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:border-gray-900 focus:ring-gray-200"
                }`}
              />

              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>

            {/* Country Code */}
            <div>
              <label
                htmlFor="countryCode"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Country Code *
              </label>

              <select
                id="countryCode"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
              >
                <option value="+91">🇮🇳 +91 India</option>
                <option value="+1">🇺🇸 +1 USA</option>
                <option value="+44">🇬🇧 +44 UK</option>
                <option value="+61">🇦🇺 +61 Australia</option>
                <option value="+65">🇸🇬 +65 Singapore</option>
                <option value="+971">🇦🇪 +971 UAE</option>
                <option value="+254">🇰🇪 +254 Kenya</option>
              </select>
            </div>

            {/* Contact Number */}
            <div>
              <label
                htmlFor="contactNumber"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Contact Number *
              </label>

              <input
                id="contactNumber"
                name="contactNumber"
                type="tel"
                inputMode="numeric"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="9876543210"
                className={`w-full rounded-lg border px-4 py-3 text-gray-900 outline-none transition focus:ring-2 ${
                  errors.contactNumber
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:border-gray-900 focus:ring-gray-200"
                }`}
              />

              {errors.contactNumber && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.contactNumber}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Email Address *
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full rounded-lg border px-4 py-3 text-gray-900 outline-none transition focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:border-gray-900 focus:ring-gray-200"
                }`}
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Travel Date */}
            <div>
              <label
                htmlFor="travelDate"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Date of Travel *
              </label>

              <input
                id="travelDate"
                name="travelDate"
                type="date"
                min={getToday()}
                value={formData.travelDate}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-3 text-gray-900 outline-none transition focus:ring-2 ${
                  errors.travelDate
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:border-gray-900 focus:ring-gray-200"
                }`}
              />

              {errors.travelDate && (
                <p className="mt-1 text-sm text-red-600">{errors.travelDate}</p>
              )}
            </div>

            {/* Number of People */}
            <div>
              <label
                htmlFor="people"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Number of People *
              </label>

              <input
                id="people"
                name="people"
                type="number"
                min="1"
                value={formData.people}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-3 text-gray-900 outline-none transition focus:ring-2 ${
                  errors.people
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:border-gray-900 focus:ring-gray-200"
                }`}
              />

              {errors.people && (
                <p className="mt-1 text-sm text-red-600">{errors.people}</p>
              )}
            </div>

            {/* Hotel Category */}
            <div>
              <label
                htmlFor="hotelCategory"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Hotel Category *
              </label>

              <select
                id="hotelCategory"
                name="hotelCategory"
                value={formData.hotelCategory}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
              >
                <option value="Standard">Standard</option>
                <option value="Deluxe">Deluxe</option>
                <option value="Luxury">Luxury</option>
              </select>
            </div>

            {/* Children */}
            <div>
              <label
                htmlFor="children"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Number of Children
              </label>

              <input
                id="children"
                name="children"
                type="number"
                min="0"
                value={formData.children}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-3 text-gray-900 outline-none transition focus:ring-2 ${
                  errors.children
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:border-gray-900 focus:ring-gray-200"
                }`}
              />

              {errors.children && (
                <p className="mt-1 text-sm text-red-600">{errors.children}</p>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center rounded-lg bg-gray-900 px-6 py-3.5 font-bold text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <LoadingSpinner />
                  <span className="ml-2">Submitting...</span>
                </>
              ) : (
                "Submit Enquiry"
              )}
            </button>
          </div>

          <p className="mt-4 text-center text-xs text-gray-500">
            * Required fields
          </p>
        </form>
      </div>
    </section>
  );
}
