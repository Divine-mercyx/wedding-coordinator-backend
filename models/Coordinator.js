import mongoose from "mongoose";

const coordinatorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true,
        maxlength: [50, 'Name cannot be more than 50 characters']
    },
    location: {
        type: String,
        required: [true, 'Please add a location'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Please add a price'],
        min: [0, 'Price must be at least 0']
    },
    profilePhoto: {
        type: String,
        default: 'default.jpg'
    },
    bio: {
        type: String,
        required: [true, 'Please add a bio'],
        maxlength: [500, 'Bio cannot be more than 500 characters']
    },
    availability: [{
        date: {
            type: Date,
            required: true
        },
        isAvailable: {
            type: Boolean,
            default: true
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Coordinator', coordinatorSchema);
