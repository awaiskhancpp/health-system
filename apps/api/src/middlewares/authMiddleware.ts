import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const JWT_SECRET = process.env.JWT_SECRET || '';

type AuthOptions = {
  roles?: string[];
};

export const authMiddleware = ({ roles = [] }: AuthOptions = {}) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
      res.status(401).json({ message: 'Access Denied' });
      return; // Ensure function exits here
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as { userId: string; role: string };
      req.body.user = decoded;

      if (roles.length > 0 && !roles.includes(decoded.role)) {
        res.status(403).json({ message: 'Forbidden' });
        return;
      }

      next(); // Call next() to proceed with the request
    } catch (error) {
      res.status(400).json({ message: 'Invalid Token' });
    }
  };
};
