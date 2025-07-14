import express from 'express';
import { getCoordinators, getCoordinator, checkAvailability } from '../controllers/coordinators.js';

const coordinatorRouter = express.Router();

coordinatorRouter
    .route('/')
    .get(getCoordinators);

coordinatorRouter
    .route('/:id')
    .get(getCoordinator);

coordinatorRouter
    .route('/:id/check-availability')
    .get(checkAvailability);

export default coordinatorRouter;
