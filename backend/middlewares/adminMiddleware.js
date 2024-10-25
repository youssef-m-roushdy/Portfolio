const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config();

const adminMiddleware = async (req, res, next) => {
  try {
    // Decode the JWT token from the request header
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user by the decoded token's user ID
    const user = await User.findById(decoded.id);

    if (!user || !user.isAdmin) {
      return res.status(403).json({ message: 'Access denied: Admins only' });
    }

    // If user is an admin, allow the request to proceed
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token or unauthorized' });
  }
};

module.exports = adminMiddleware;
