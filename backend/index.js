'use strict';

import express from 'express';
import routes from './routes/routes.js';

const app = express ();

app.use(express.json());
app.use('/api', routes);

app.listen(process.env.API_PORT, () => {
    console.log("Server Listening on PORT:", process.env.API_PORT);
});