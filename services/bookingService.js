import Booking from '../models/Booking.js';
import Coordinator from '../models/Coordinator.js';

export const createBookingService = async (bookingData) => {
    const coordinator = await Coordinator.findById(bookingData.coordinatorId);
    if (!coordinator) {
        throw new Error('Coordinator not found');
    }

    const { isAvailable } = await checkAvailabilityService(
        bookingData.coordinatorId,
        bookingData.weddingDate
    );

    if (!isAvailable) {
        throw new Error('Coordinator is not available on this date');
    }

    return await Booking.create(bookingData);
};

export const getBookingsService = async (query = {}) => {
    return await Booking.find(query).populate('coordinator');
};

export const checkAvailabilityService = async (coordinatorId, date) => {
    const coordinator = await Coordinator.findById(coordinatorId);
    if (!coordinator) {
        throw new Error('Coordinator not found');
    }

    const availability = coordinator.availability.find(
        a => a.date.toISOString() === new Date(date).toISOString()
    );

    const existingBooking = await Booking.findOne({
        coordinator: coordinatorId,
        weddingDate: date
    });

    return {
        isAvailable: (availability ? availability.isAvailable : true) && !existingBooking,
        coordinator
    };
};
