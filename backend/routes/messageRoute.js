import express from "express";
import messageModel from '../models/messageModel.js';

const router = express.Router()

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const { name, email, content } = req.body;
        const newMessage = new messageModel({
            name,
            email,
            content
        });
        await newMessage.save();
        res.status(201).json({ message: 'Message sent successfully', data: newMessage });
    } catch (error) {
        res.status(500).json({ message: 'Error sending message', error: error.message });
    }
});

export default router;