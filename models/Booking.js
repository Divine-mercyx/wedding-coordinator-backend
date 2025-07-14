import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    coordinator: {
        type: mongoose.Schema.ObjectId,
        ref: 'Coordinator',
        required: true
    },
    name: {
        type: String,
        required: [true, 'Please add your name'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please add your email'],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    weddingDate: {
        type: Date,
        required: [true, 'Please add your wedding date']
    },
    guestNumber: {
        type: Number,
        required: [true, 'Please add number of guests'],
        min: [1, 'Guest number must be at least 1']
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

bookingSchema.index({ coordinator: 1, weddingDate: 1 }, { unique: true });

export default mongoose.model('Booking', bookingSchema);
