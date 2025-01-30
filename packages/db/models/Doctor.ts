
// packages/db/models/Doctor.ts
import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    age: Number,
    experience: Number,
    degrees: [{ type: String }], 
    specialty: String, 
    verified: { type: Boolean, default: false },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }], 
  }, { timestamps: true });
  

export const Doctor = mongoose.model('Doctor', DoctorSchema);
