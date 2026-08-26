"use client";

import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const COUNTRY_CODES = [
  { code: "+91", country: "India" },
  { code: "+1", country: "USA / Canada" },
  { code: "+44", country: "United Kingdom" },
  { code: "+61", country: "Australia" },
  { code: "+65", country: "Singapore" },
  { code: "+971", country: "UAE" },
];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    countryCode: "+91",
    contactNumber: "",
    email: "",
    dateOfTravel: "",
    numberOfPeople: 1,
    hotelCategory: "Standard",
    numberOfChildren: 0,
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // --------------------------------
  // Minimum travel date
  // --------------------------------

  const getTomorrowDate = () => {
    const tomorrow = new Date();

    tomorrow.setDate(tomorrow.getDate() + 1);

    return tomorrow.toISOString().split("T")[0];
  };

  // --------------------------------
  // Handle input
  // --------------------------------

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    // Remove error when user edits field
    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setStatus({
      type: "",
      message: "",
    });
  };

  // --------------------------------
  // Client validation
  // --------------------------------

  const validateForm = () => {
    const newErrors = {};

    const name = formData.fullName.trim();
    const phone = formData.contactNumber.trim();
    const email = formData.email.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phoneRegex = /^[0-9]{6,15}$/;

    // Full name
    if (!name) {
      newErrors.fullName = "Full name is required.";
    } else if (name.length < 2) {
      newErrors.fullName = "Full name must contain at least 2 characters.";
    }

    // Country code
    if (!formData.countryCode) {
      newErrors.countryCode = "Please select a country code.";
    }

    // Phone
    if (!phone) {
      newErrors.contactNumber = "Contact number is required.";
    } else if (!phoneRegex.test(phone)) {
      newErrors.contactNumber = "Enter a valid contact number.";
    }

    // Email
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    // Travel date
    if (!formData.dateOfTravel) {
      newErrors.dateOfTravel = "Travel date is required.";
    } else {
      const selectedDate = new Date(formData.dateOfTravel);

      const today = new Date();

      today.setHours(0, 0, 0, 0);

      if (selectedDate <= today) {
        newErrors.dateOfTravel = "Travel date must be in the future.";
      }
    }

    // Number of people
    if (
      !Number.isInteger(Number(formData.numberOfPeople)) ||
      Number(formData.numberOfPeople) < 1
    ) {
      newErrors.numberOfPeople = "Number of people must be at least 1.";
    }

    // Hotel
    if (!["Standard", "Deluxe", "Luxury"].includes(formData.hotelCategory)) {
      newErrors.hotelCategory = "Please select a valid hotel category.";
    }

    // Children
    if (
      !Number.isInteger(Number(formData.numberOfChildren)) ||
      Number(formData.numberOfChildren) < 0
    ) {
      newErrors.numberOfChildren = "Number of children cannot be negative.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // --------------------------------
  // Submit
  // --------------------------------

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    // First validate client-side
    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          ...formData,

          numberOfPeople: Number(formData.numberOfPeople),

          numberOfChildren: Number(formData.numberOfChildren),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to submit enquiry.");
      }

      // Success
      setStatus({
        type: "success",
        message: data.message,
      });

      // Reset form
      setFormData({
        fullName: "",
        countryCode: "+91",
        contactNumber: "",
        email: "",
        dateOfTravel: "",
        numberOfPeople: 1,
        hotelCategory: "Standard",
        numberOfChildren: 0,
      });

      setErrors({});
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-6 shadow-xl sm:p-8">
      <div className="mb-8">
        <span className="text-xs font-bold tracking-[0.2em] text-gray-500">
          PLAN YOUR JOURNEY
        </span>

        <h2 className="mt-3 text-3xl font-bold text-gray-900">
          Booking Enquiry
        </h2>

        <p className="mt-2 text-gray-600">
          Tell us about your trip and our travel expert will get in touch with
          you.
        </p>
      </div>

      {/* Success */}
      {status.type === "success" && (
        <div
          role="status"
          className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800"
        >
          <strong>Thank you!</strong> {status.message}
        </div>
      )}

      {/* Error */}
      {status.type === "error" && (
        <div
          role="alert"
          className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800"
        >
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Full Name */}
        <div>
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
            className={`w-full rounded-lg border px-4 py-3 outline-none transition focus:ring-2 ${
              errors.fullName
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:border-gray-900 focus:ring-gray-200"
            }`}
          />

          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-800">
            Contact Number *
          </label>

          <div className="flex gap-2">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className={`w-32 rounded-lg border bg-white px-3 py-3 outline-none focus:ring-2 ${
                errors.countryCode
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-gray-900 focus:ring-gray-200"
              }`}
            >
              {COUNTRY_CODES.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.code} {item.country}
                </option>
              ))}
            </select>

            <input
              name="contactNumber"
              type="tel"
              inputMode="numeric"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="9876543210"
              className={`min-w-0 flex-1 rounded-lg border px-4 py-3 outline-none focus:ring-2 ${
                errors.contactNumber
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-gray-900 focus:ring-gray-200"
              }`}
            />
          </div>

          {errors.countryCode && (
            <p className="mt-1 text-sm text-red-600">{errors.countryCode}</p>
          )}

          {errors.contactNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.contactNumber}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-gray-800"
          >
            Email *
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={`w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 ${
              errors.email
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:border-gray-900 focus:ring-gray-200"
            }`}
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Date + People */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Travel Date */}
          <div>
            <label
              htmlFor="dateOfTravel"
              className="mb-2 block text-sm font-semibold text-gray-800"
            >
              Date of Travel *
            </label>

            <input
              id="dateOfTravel"
              name="dateOfTravel"
              type="date"
              min={getTomorrowDate()}
              value={formData.dateOfTravel}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 ${
                errors.dateOfTravel
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-gray-900 focus:ring-gray-200"
              }`}
            />

            {errors.dateOfTravel && (
              <p className="mt-1 text-sm text-red-600">{errors.dateOfTravel}</p>
            )}
          </div>

          {/* People */}
          <div>
            <label
              htmlFor="numberOfPeople"
              className="mb-2 block text-sm font-semibold text-gray-800"
            >
              Number of People *
            </label>

            <input
              id="numberOfPeople"
              name="numberOfPeople"
              type="number"
              min="1"
              value={formData.numberOfPeople}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 ${
                errors.numberOfPeople
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-gray-900 focus:ring-gray-200"
              }`}
            />

            {errors.numberOfPeople && (
              <p className="mt-1 text-sm text-red-600">
                {errors.numberOfPeople}
              </p>
            )}
          </div>
        </div>

        {/* Hotel + Children */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Hotel */}
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
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
            >
              <option value="Standard">Standard</option>

              <option value="Deluxe">Deluxe</option>

              <option value="Luxury">Luxury</option>
            </select>

            {errors.hotelCategory && (
              <p className="mt-1 text-sm text-red-600">
                {errors.hotelCategory}
              </p>
            )}
          </div>

          {/* Children */}
          <div>
            <label
              htmlFor="numberOfChildren"
              className="mb-2 block text-sm font-semibold text-gray-800"
            >
              Number of Children
            </label>

            <input
              id="numberOfChildren"
              name="numberOfChildren"
              type="number"
              min="0"
              value={formData.numberOfChildren}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 ${
                errors.numberOfChildren
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-gray-900 focus:ring-gray-200"
              }`}
            />

            {errors.numberOfChildren && (
              <p className="mt-1 text-sm text-red-600">
                {errors.numberOfChildren}
              </p>
            )}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-lg bg-gray-900 px-6 py-4 font-bold text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <LoadingSpinner />
              <span>Submitting...</span>
            </>
          ) : (
            "Submit Enquiry"
          )}
        </button>
      </form>
    </div>
  );
}
