// packages/db/models/HR.ts
import mongoose from 'mongoose';

const HRSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  pendingDoctors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' }], // Doctors awaiting verification
}, { timestamps: true });

export const HR = mongoose.model('HR', HRSchema);
