// models/Courier.js

import mongoose from 'mongoose';

const CourierSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sort_order: { type: Number, default: 0 },
  inside_dhaka_charge: { type: Number, required: true },
  outside_dhaka_charge: { type: Number, required: true },
});

const Courier = mongoose.models.Courier || mongoose.model('Courier', CourierSchema);
export default Courier;
