import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import errorHandler from './middlewares/errorHandler.js';
import bookRouter from "./routes/bookings.js";
import coordinatorRouter from "./routes/coordinators.js";

const app = express();

app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
));
app.use(express.json());
app.use(morgan('dev'));


app.use('/api/v1/wedding/bookings', bookRouter)
app.use('/api/v1/wedding/coordinators', coordinatorRouter)

app.use(errorHandler);

export default app;
