// packages/db/models/Patient.ts
import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    age: Number,
    symptoms: [String],
    diseaseHistory: [String],
    smoking: Boolean,
    drinking: Boolean,
    previousMedicines: [{ name: String, imageUrl: String }], // ✅ Fix: Store both name and image
    assignedDoctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' }, 
  }, { timestamps: true });
  

export const Patient = mongoose.model('Patient', PatientSchema);
