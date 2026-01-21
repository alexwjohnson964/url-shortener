import express from 'express';

import cors from 'cors';
const app = express();

app.use(express.json());

app.use(cors())

// Routes
// app.use('/api/flags', routes);
app.get('/test', (req, res) => {
  res.status(200).json({
    'shortUrl': 'generated url goes here'
  })
})

// app.use(errorHandler);

export default app;