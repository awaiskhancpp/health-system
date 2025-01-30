// apps/api/src/routes/hrRoutes.ts
import express ,{Request,Response}from 'express';
import { HR } from '@repo/db/models/HR'
import { Doctor } from '@repo/db/models/Doctor';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

// Verify doctor request
router.patch('/verify-doctor/:id', authMiddleware({ roles: ['hr'] }), async (req: Request, res: Response): Promise<void> => {
    try {
      const doctor = await Doctor.findById(req.params.id);
      if (!doctor) {
        res.status(404).json({ message: 'Doctor not found'});
        return;
      }
  
      doctor.verified = true;
      await doctor.save();
      
      res.json({ message: 'Doctor verified' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  

export default router;
