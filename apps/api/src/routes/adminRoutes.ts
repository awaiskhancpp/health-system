// apps/api/src/routes/adminRoutes.ts
import express from 'express';
import { Doctor } from '@repo/db/models/Doctor';
import { Patient } from '@repo/db/models/Patient';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

// Get all doctors
router.get('/doctors', authMiddleware({roles:['admin']}), async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});

// Remove doctor
router.delete('/doctors/:id/remove', authMiddleware({roles:['admin']}), async (req, res) => {
  await Doctor.findByIdAndDelete(req.params.id);
  res.json({ message: 'Doctor removed' });
});

// Get all patients
router.get('/patients', authMiddleware({roles:['admin']}), async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

// Remove patient
router.delete('/patients/:id/remove', authMiddleware({roles:['admin']}), async (req, res) => {
  await Patient.findByIdAndDelete(req.params.id);
  res.json({ message: 'Patient removed' });
});

export default router;
