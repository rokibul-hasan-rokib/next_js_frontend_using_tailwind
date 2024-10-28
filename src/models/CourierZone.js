// models/CourierZone.js

import mongoose from "mongoose";

const CourierZoneSchema = new mongoose.Schema({
  courier_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Courier",
    required: true,
  },
  zone_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Zone",
    required: true,
  },
});

const CourierZone =
  mongoose.models.CourierZone ||
  mongoose.model("CourierZone", CourierZoneSchema);
export default CourierZone;
