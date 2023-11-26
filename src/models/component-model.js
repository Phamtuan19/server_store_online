import mongoose, { Schema } from "mongoose";

const ComponentSchema = new Schema(
  {
    component_name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    sequence_number: {
      type: Number,
      required: true,
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

export default mongoose.model("component", ComponentSchema);
