// apps/api/src/routes/doctorRoutes.ts
import express from 'express';
import { Appointment } from '@repo/db/models/Appointment';
import { Patient } from '@repo/db/models/Patient';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

// Get doctor appointments
router.get('/appointments', authMiddleware({roles:['doctor']}), async (req, res) => {
  const doctorId = req.body.user.userId;
  const appointments = await Appointment.find({ doctorId }).populate('patientId');
  res.json(appointments);
});

// Accept or reject appointment
router.patch('/appointments/:id', authMiddleware({roles:['doctor']}), async (req, res) => {
  const { status } = req.body;
  await Appointment.findByIdAndUpdate(req.params.id, { status });
  res.json({ message: `Appointment ${status}` });
});

// Get patient details
router.get('/patient/:id', authMiddleware({roles:['doctor']}), async (req, res) => {
  const patient = await Patient.findById(req.params.id);
  res.json(patient);
});

export default router;
