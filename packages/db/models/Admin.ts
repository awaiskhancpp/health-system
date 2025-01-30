// packages/db/models/Admin.ts
import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  doctors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' }],  // List of doctors
  patients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' }], // List of patients
}, { timestamps: true });

export const Admin = mongoose.model('Admin', AdminSchema);