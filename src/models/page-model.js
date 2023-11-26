import mongoose, { Schema } from "mongoose";

const PageSchema = new Schema(
  {
    page_name: {
      type: String,
      required: true,
      unique: true,
    },
    path: {
      type: String,
      required: true,
      unique: true,
    },
    isPrivate: {
      type: Boolean,
      required: true,
      default: false,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("page", PageSchema);
