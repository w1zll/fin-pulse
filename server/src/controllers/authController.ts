import { Request, Response } from 'express';
import { User } from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

export const register = async (req: Request, res: Response) => {
   const { email, password } = req.body;

   if (!email || !password)
      return res
         .status(400)
         .json({ message: 'Email and password are required' });

   try {
      const existingUser = await User.findOne({ email });
      if (existingUser)
         return res.status(400).json({ message: 'User already exists' });

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ email, password: hashedPassword });

      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1d' });

      res.status(201).json({
         token,
         user: { id: user._id, email: user.email },
      });
   } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Registration failed', error: err });
   }
};

export const login = async (req: Request, res: Response) => {
   const { email, password } = req.body;

   if (!email || !password)
      return res
         .status(400)
         .json({ message: 'Email and password are required' });

   try {
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: 'User not found' });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
         return res.status(400).json({ message: 'Invalid credentials' });

      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1d' });

      res.json({ token, user: { id: user._id, email: user.email } });
   } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Login failed', error: err });
   }
};
