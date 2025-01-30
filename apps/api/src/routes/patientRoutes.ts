// apps/api/src/routes/patientRoutes.ts
import express from 'express';
import { Patient } from '@repo/db/models/Patient';
import { Appointment } from '@repo/db/models/Appointment';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

// Submit medical form
router.post('/form', authMiddleware({roles:['patient']}), async (req, res) => {
  const patient = new Patient({ ...req.body, userId: req.body.user.userId });
  await patient.save();
  res.json({ message: 'Form submitted' });
});

// Request appointment
router.post('/appointments', authMiddleware({roles:['patient']}), async (req, res) => {
  const appointment = new Appointment({ ...req.body, status: 'pending' });
  await appointment.save();
  res.json({ message: 'Appointment requested' });
});

export default router;
