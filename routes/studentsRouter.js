import express from 'express';
const router = express.Router();
import Student from '../models/Student.js';

router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        console.error('Error Fetching students: ', error);
        res.status(500).json({error: 'Internal server error'});
    }
});

export default router;