// models/City.js

import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  division_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Division', // Reference to the Division model
    required: true
  },
  sort_order: {
    type: Number,
    default: 0
  },
  status: {
    type: Boolean,
    default: true // true for active, false for inactive
  }
}, { timestamps: true });

const City = mongoose.models.City || mongoose.model('City', citySchema);
export default City;
