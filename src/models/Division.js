// models/Division.js

import mongoose from 'mongoose';

const divisionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
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

const Division = mongoose.models.Division || mongoose.model('Division', divisionSchema);
export default Division;
