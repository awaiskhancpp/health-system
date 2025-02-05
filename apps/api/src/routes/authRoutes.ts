// apps/api/src/routes/authRoutes.ts
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '@repo/db/models/User';
import dotenv from 'dotenv';
import { Request , Response } from 'express';

dotenv.config();
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || '';
console.log(process.env.JWT_SECRET)

// Register
router.post('/:role/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const { role } = req.params;
    console.log(req.body)
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed Password:', hashedPassword);
    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();
    const savedUser = await User.findOne({ email , role });
    console.log('Stored Password:', savedUser?.password);

    res.status(201).json({ message: 'User registered' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
});


// Login Route
router.post('/:role/login', async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const { role } = req.params
    // console.log(req.body)
    // const { role } = req.params;
    
    // Find user
    const user = await User.findOne({ email, role });
    console.log(user)
    if (!user) {
      res.status(400).json({ message: 'User not found' });
      return;
    }
    // const hashedPassword=await bcrypt.hash(password,10);
    // console.log(hashedPassword)
    // Validate password
    const validPassword = await bcrypt.compare(password, user.password);
    console.log(validPassword)
    if (!validPassword) {
      res.status(400).json({ message: 'Invalid password' });
      return;
    }

    // Generate token
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ token });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Error logging in' });
  }
});
export default router;
