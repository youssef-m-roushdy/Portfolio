const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Assuming User model exists

// Middleware to authenticate JWT
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403); // Forbidden if token is invalid
            }

            req.user = user; // Store the user in request
            next();
        });
    } else {
        res.sendStatus(401); // Unauthorized if no token is provided
    }
};

// Middleware to verify if user is authenticated
const isAuthenticated = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization token required' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        const user = await User.findById(decoded.id); // Fetch user from DB

        if (!user) {
            return res.status(401).json({ message: 'User not found or token invalid' });
        }

        req.user = user; // Store user in request
        next(); // Proceed to next middleware or route
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = { authenticateJWT, isAuthenticated };
