import { createBookingService, getBookingsService, checkAvailabilityService } from '../services/bookingService.js';
import catchAsync from '../utils/catchAsync.js';

export const createBooking = catchAsync(async (req, res, next) => {
    const booking = await createBookingService(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            booking
        }
    });
});

export const getBookings = catchAsync(async (req, res, next) => {
    const bookings = await getBookingsService(req.query);

    res.status(200).json({
        status: 'success',
        results: bookings.length,
        data: {
            bookings
        }
    });
});

export const checkAvailability = catchAsync(async (req, res, next) => {
    const { isAvailable } = await checkAvailabilityService(
        req.params.coordinatorId,
        req.query.date
    );

    res.status(200).json({
        status: 'success',
        data: {
            isAvailable
        }
    });
});
