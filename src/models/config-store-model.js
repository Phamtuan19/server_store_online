import mongoose, { Schema } from "mongoose";

const ConfigStoreSchema = new Schema(
  {
    conponent_name: {
      type: String,
      required: true,
    },
    page_name: {
        
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("config_store", ConfigStoreSchema);
