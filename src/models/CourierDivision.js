import mongoose from 'mongoose';

const CourierDivisionSchema = new mongoose.Schema({
  courier_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Courier', required: true },
  division_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Division', required: true },
});

const CourierDivision = mongoose.models.CourierDivision || mongoose.model('CourierDivision', CourierDivisionSchema);
export default CourierDivision;