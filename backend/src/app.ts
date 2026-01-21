import express from 'express';
import cors from 'cors';
import { handleRequestToShortUrl, generateShortUrl} from './controllers/controller';

const app = express();

app.use(express.json());

app.use(cors())

// Routes
app.get('/test', handleRequestToShortUrl);
export default app;