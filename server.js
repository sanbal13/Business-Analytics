import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import dashboardRouter from './routes/dashboardRouter.js';
import studentsRouter from './routes/studentsRouter.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI)
.then(() => {console.log('Connected to MongoDB')})
.catch((error) => { 
    console.error('Error connecting to MongoDB: ', error);

});

app.use('/', dashboardRouter);
app.use('/students', studentsRouter);

const PORT = 5005;

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});

