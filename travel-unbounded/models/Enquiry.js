import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    contactNumber: {
      type: String,
      required: true,
      trim: true,
    },

    countryCode: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    dateOfTravel: {
      type: Date,
      required: true,
    },

    numberOfPeople: {
      type: Number,
      required: true,
      min: 1,
    },

    hotelCategory: {
      type: String,
      required: true,
      enum: ["Standard", "Deluxe", "Luxury"],
    },

    numberOfChildren: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Enquiry =
  mongoose.models.Enquiry || mongoose.model("Enquiry", enquirySchema);

export default Enquiry;
