import mongoose from 'mongoose';

export const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.error("❌ MONGO_URI is missing in environment variables.");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: 'healthcare' });
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

// Export all models
export * from './models/User';
export * from './models/Admin';
export * from './models/Doctor';
export * from './models/Patient';
export * from './models/Appointment';
export * from './models/HR';
export * from './models/Review';
