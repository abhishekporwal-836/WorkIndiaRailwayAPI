// api/index.js

const express = require('express');
const serverless = require('serverless-http');
const helmet = require('helmet');
const morgan = require('morgan');

const authRoutes = require('../routes/auth');
const trainRoutes = require('../routes/trains');
const bookingRoutes = require('../routes/bookings');
const { errorHandler } = require('../middlewares/errorHandler');

require('dotenv').config();  // ✅ Load env vars

const app = express();

app.use(helmet(), morgan('tiny'), express.json());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/trains', trainRoutes);
app.use('/api/v1/bookings', bookingRoutes);

app.use(errorHandler);

module.exports = app;
module.exports.handler = serverless(app);  // ✅ Important for Serverless
