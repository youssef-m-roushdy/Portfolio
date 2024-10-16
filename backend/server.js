const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || 8080;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//static files


// Routes
app.use('/api/v1/portfolio', require('./routes/portfolioRoute'))



// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
