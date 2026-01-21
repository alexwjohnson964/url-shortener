import express from 'express';
import cors from 'cors';
import { testController } from './controllers/controller';

const app = express();

app.use(express.json());

app.use(cors())

// Routes
app.get('/test', testController);

export default app;