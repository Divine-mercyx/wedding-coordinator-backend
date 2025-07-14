import Coordinator from '../models/Coordinator.js';
import ApiFeatures from '../utils/apiFeatures.js';

export const getAllCoordinatorsService = async (queryStr) => {
    // Filtering, sorting, pagination
    const features = new ApiFeatures(Coordinator.find(), queryStr)
        .filter()
        .sort()
        .limitFields()
        .paginate();

    return await features.query;
};

export const getCoordinatorService = async (id) => {
    const coordinator = await Coordinator.findById(id);
    if (!coordinator) {
        throw new Error('Coordinator not found');
    }
    return coordinator;
};

export const checkAvailabilityService = async (coordinatorId, date) => {
    const coordinator = await Coordinator.findById(coordinatorId);
    if (!coordinator) {
        throw new Error('Coordinator not found');
    }

    const availability = coordinator.availability.find(
        a => a.date.toISOString() === new Date(date).toISOString()
    );

    return {
        isAvailable: availability ? availability.isAvailable : true,
        coordinator
    };
};
