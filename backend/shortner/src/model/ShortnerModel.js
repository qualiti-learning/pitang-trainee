import mongoose from "mongoose";

const ShortnerSchema = mongoose.Schema({
  name: String,
});

const ShortnerModel = mongoose.model("shortner", ShortnerSchema);

export default ShortnerModel;
