// apps/api/src/server.ts
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from '../../../packages/db/connections';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

console.log('Working Directory:', __dirname);

// Import Routes
import authRoutes from './routes/authRoutes';
import adminRoutes from './routes/adminRoutes';
import hrRoutes from './routes/hrRoutes';
import doctorRoutes from './routes/doctorRoutes';
import patientRoutes from './routes/patientRoutes';

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/hr', hrRoutes);
app.use('/api/doctor', doctorRoutes);
app.use('/api/patient', patientRoutes);

// Connect to DB and Start Server
connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}).catch((err) => {
  console.log(process.cwd())
  console.error('❌ MongoDB Connection Error:', err)
  
});