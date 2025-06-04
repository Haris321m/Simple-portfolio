import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
});

const message = mongoose.model('Message', messageSchema);

export default message;