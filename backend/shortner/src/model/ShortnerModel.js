import mongoose from "mongoose";

const ShortnerSchema = mongoose.Schema(
  {
    expired: { type: Boolean, default: false },
    expiredDate: Date,
    hash: { type: String, required: true },
    hits: { type: Number, default: 0 },
    link: { type: String, required: true },
    metadata: [mongoose.Schema.Types.Mixed],
    name: String,
  },
  {
    timestamp: true,
  }
);

const ShortnerModel = mongoose.model("shortner", ShortnerSchema);

export default ShortnerModel;
