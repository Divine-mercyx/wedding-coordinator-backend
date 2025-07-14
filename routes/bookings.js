import express from 'express';
import { getBookings, createBooking, checkAvailability } from '../controllers/bookings.js';

const bookRouter = express.Router();

bookRouter
    .route('/')
    .get(getBookings)
    .post(createBooking);

bookRouter
    .route('/check-availability/:coordinatorId')
    .get(checkAvailability);

export default bookRouter;
