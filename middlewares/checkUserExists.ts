// middlewares/checkUserExists.ts
import { Request, Response, NextFunction } from 'express';
import userModel from '../models/userModel';

export const checkUserExists = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: 'Error checking user existence', error: error });
  }
};

