// packages/db/models/User.ts
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'hr', 'doctor', 'patient'], required: true },
}, { timestamps: true });
// Hash password before saving
// UserSchema.pre('save', async function (next) {
//   if (this.isModified('password')) {
//     this.password = await bcrypt.hash(this.password, 10);  // Double hashing issue
//   }
//   next();
// });


export const User = mongoose.models.User ||mongoose.model('User', UserSchema);
