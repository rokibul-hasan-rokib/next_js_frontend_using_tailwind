// models/Zone.js

import mongoose from 'mongoose';

const zoneSchema = new mongoose.Schema({
  city_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City', // Reference to the City model
    required: true
  },
  name: {
    type: String,
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

const Zone = mongoose.models.Zone || mongoose.model('Zone', zoneSchema);
export default Zone;
