import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import dashboardRouter from './routes/dashboardRouter.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// mongoose.connect(process.env.MONGO_URI);

app.use('/', dashboardRouter);

const PORT = 5005;

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});

