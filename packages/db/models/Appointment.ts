// packages/db/models/Appointment.ts
import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
  appointmentDate: Date,
  recommendations: String, // Filled by the doctor
}, { timestamps: true });

export const Appointment = mongoose.model('Appointment', AppointmentSchema);
