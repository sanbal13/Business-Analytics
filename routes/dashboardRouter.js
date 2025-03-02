import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.end("Welcome to Social Media Dashboard");
});

export default router;