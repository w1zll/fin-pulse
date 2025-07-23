import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth';



const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => res.send('API is working'));

const PORT = process.env.PORT || 5000;

mongoose
   .connect(process.env.MONGO_URI!)
   .then(() => {
      app.listen(PORT, () => {
         console.log(`Server running on https://localhost:${PORT}`);
      });
   })
   .catch((err) => console.error('MongoDB connection failed', err));

app.use('/api/auth', authRoutes);
