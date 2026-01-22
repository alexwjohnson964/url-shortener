import express from 'express';
import cors from 'cors';
import { handleRequestToShortUrl, generateShortUrl} from './controllers/controller';

const app = express();

app.use(express.json());

app.use(cors())

app.post('/urls', generateShortUrl);
app.get('/urls/:shortUrl', handleRequestToShortUrl);

export default app;