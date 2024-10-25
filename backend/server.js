const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const emailRoute = require('./routes/emailRoute');

dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || 8080;

const app = express();

// Middleware
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: "GET,POST,PUT,DELETE",
    credentials: true
  }));
app.use(express.json());

//static files


// Routes
app.use('/api/v1/email', emailRoute)



// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
