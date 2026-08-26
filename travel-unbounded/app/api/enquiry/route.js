import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PHONE_REGEX = /^[0-9]{6,15}$/;

const ALLOWED_HOTEL_CATEGORIES = ["Standard", "Deluxe", "Luxury"];

export async function POST(request) {
  try {
    // --------------------------------
    // 1. Read request body
    // --------------------------------

    const body = await request.json();

    const {
      fullName,
      contactNumber,
      countryCode,
      email,
      dateOfTravel,
      numberOfPeople,
      hotelCategory,
      numberOfChildren,
    } = body;

    // --------------------------------
    // 2. Normalize values
    // --------------------------------

    const cleanName = typeof fullName === "string" ? fullName.trim() : "";

    const cleanPhone =
      typeof contactNumber === "string" ? contactNumber.trim() : "";

    const cleanCountryCode =
      typeof countryCode === "string" ? countryCode.trim() : "";

    const cleanEmail =
      typeof email === "string" ? email.trim().toLowerCase() : "";

    const people = Number(numberOfPeople);

    const children =
      numberOfChildren === undefined ||
      numberOfChildren === null ||
      numberOfChildren === ""
        ? 0
        : Number(numberOfChildren);

    // --------------------------------
    // 3. Required field validation
    // --------------------------------

    if (!cleanName) {
      return NextResponse.json(
        {
          success: false,
          message: "Full name is required.",
        },
        { status: 400 },
      );
    }

    if (!cleanPhone) {
      return NextResponse.json(
        {
          success: false,
          message: "Contact number is required.",
        },
        { status: 400 },
      );
    }

    if (!cleanCountryCode) {
      return NextResponse.json(
        {
          success: false,
          message: "Country code is required.",
        },
        { status: 400 },
      );
    }

    if (!cleanEmail) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is required.",
        },
        { status: 400 },
      );
    }

    if (!dateOfTravel) {
      return NextResponse.json(
        {
          success: false,
          message: "Travel date is required.",
        },
        { status: 400 },
      );
    }

    // --------------------------------
    // 4. Name validation
    // --------------------------------

    if (cleanName.length < 2 || cleanName.length > 100) {
      return NextResponse.json(
        {
          success: false,
          message: "Full name must be between 2 and 100 characters.",
        },
        { status: 400 },
      );
    }

    // --------------------------------
    // 5. Email validation
    // --------------------------------

    if (!EMAIL_REGEX.test(cleanEmail)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address.",
        },
        { status: 400 },
      );
    }

    // --------------------------------
    // 6. Phone validation
    // --------------------------------

    if (!PHONE_REGEX.test(cleanPhone)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid contact number.",
        },
        { status: 400 },
      );
    }

    // --------------------------------
    // 7. Country code validation
    // --------------------------------

    if (!/^\+\d{1,4}$/.test(cleanCountryCode)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid country code.",
        },
        { status: 400 },
      );
    }

    // --------------------------------
    // 8. Travel date validation
    // --------------------------------

    const travelDate = new Date(dateOfTravel);

    if (Number.isNaN(travelDate.getTime())) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid travel date.",
        },
        { status: 400 },
      );
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (travelDate <= today) {
      return NextResponse.json(
        {
          success: false,
          message: "Travel date must be in the future.",
        },
        { status: 400 },
      );
    }

    // --------------------------------
    // 9. Number of people validation
    // --------------------------------

    if (!Number.isInteger(people) || people < 1) {
      return NextResponse.json(
        {
          success: false,
          message: "Number of people must be at least 1.",
        },
        { status: 400 },
      );
    }

    // --------------------------------
    // 10. Children validation
    // --------------------------------

    if (!Number.isInteger(children) || children < 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Number of children cannot be negative.",
        },
        { status: 400 },
      );
    }

    // --------------------------------
    // 11. Hotel validation
    // --------------------------------

    if (!ALLOWED_HOTEL_CATEGORIES.includes(hotelCategory)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid hotel category.",
        },
        { status: 400 },
      );
    }

    // --------------------------------
    // 12. Connect MongoDB
    // --------------------------------

    await connectDB();

    // --------------------------------
    // 13. Create enquiry
    // --------------------------------

    const enquiry = await Enquiry.create({
      fullName: cleanName,
      contactNumber: cleanPhone,
      countryCode: cleanCountryCode,
      email: cleanEmail,
      dateOfTravel: travelDate,
      numberOfPeople: people,
      hotelCategory,
      numberOfChildren: children,
    });

    // --------------------------------
    // 14. Success response
    // --------------------------------

    return NextResponse.json(
      {
        success: true,
        message:
          "Enquiry submitted successfully. Our travel expert will contact you within 24 hours.",
        enquiryId: enquiry._id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Enquiry API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while submitting your enquiry.",
      },
      { status: 500 },
    );
  }
}
