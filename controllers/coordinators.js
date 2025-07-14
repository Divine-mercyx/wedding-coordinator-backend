import { getAllCoordinatorsService, getCoordinatorService, checkAvailabilityService } from '../services/coordinatorService.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from "../middlewares/appError.js";

export const getCoordinators = catchAsync(async (req, res, next) => {
    const coordinators = await getAllCoordinatorsService(req.query);

    res.status(200).json({
        status: 'success',
        results: coordinators.length,
        data: {
            coordinators
        }
    });
});

export const getCoordinator = catchAsync(async (req, res, next) => {
    const coordinator = await getCoordinatorService(req.params.id);

    res.status(200).json({
        status: 'success',
        data: {
            coordinator
        }
    });
});

export const checkAvailability = catchAsync(async (req, res, next) => {
    const { date } = req.body;

    if (!date) {
        return next(new AppError('Please provide a date', 400));
    }

    const { isAvailable } = await checkAvailabilityService(
        req.params.id,
        date
    );

    res.status(200).json({
        status: 'success',
        data: {
            isAvailable
        }
    });
});
