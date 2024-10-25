const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const emailRoute = require('./routes/emailRoute');

dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || 8080;

const app = express();

//Database connection
mongoose.connect('mongodb://localhost:27017/portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('MongoDB connected...'))
    .catch(err => console.log('MongoDB connection error:', err));


// Middleware
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: "GET,POST,PUT,DELETE",
    credentials: true
  }));
app.use(express.json());

//static files


// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/projects', projectRoute);
app.use('/api/v1/email', emailRoute)



// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
