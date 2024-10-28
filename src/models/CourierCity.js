// models/CourierCity.js

import mongoose from "mongoose";

const CourierCitySchema = new mongoose.Schema({
  courier_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Courier",
    required: true,
  },
  city_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "City",
    required: true,
  },
});

const CourierCity =
  mongoose.models.CourierCity ||
  mongoose.model("CourierCity", CourierCitySchema);
export default CourierCity;
