import mongoose from 'mongoose';
import Coordinator from './models/Coordinator.js';
import dotenv from 'dotenv';

dotenv.config();

const coordinators = [
    {
        name: 'Sarah Johnson',
        email: 'sarah@example.com',
        profilePic: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300',
        bio: 'Experienced wedding coordinator with a passion for creating unforgettable events.',
        price: 1500,
        location: 'New York, USA',
        availability: [
            { date: new Date('2025-08-15'), isAvailable: true },
            { date: new Date('2025-08-16'), isAvailable: false }
        ]
    },
    {
        name: 'Michael Chen',
        email: 'michael@example.com',
        profilePic: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300',
        bio: 'Detail-oriented coordinator specializing in luxury weddings.',
        price: 2000,
        location: 'Los Angeles, USA',
        availability: [
            { date: new Date('2025-08-15'), isAvailable: true },
            { date: new Date('2025-08-17'), isAvailable: true }
        ]
    },
    {
        name: 'Emma Wilson',
        email: 'emma@example.com',
        profilePic: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300',
        bio: 'Creative and organized coordinator with a focus on personalized weddings.',
        price: 1800,
        location: 'Chicago, USA',
        availability: [
            { date: new Date('2025-08-16'), isAvailable: true },
            { date: new Date('2025-08-18'), isAvailable: true }
        ]
    }
];

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB Atlas');

        // Clear existing data
        await Coordinator.deleteMany();
        console.log('Cleared existing coordinators');

        // Insert new data
        await Coordinator.insertMany(coordinators);
        console.log('Successfully seeded coordinators');

        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
