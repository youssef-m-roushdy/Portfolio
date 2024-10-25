const express = require('express');
const passport = require('passport');
const { login, register, resetPassword, sendEmailCode, resetForgottenPassword } = require('../controllers/authController'); // Import the sendEmailCode function
require('dotenv').config();

const router = express.Router();

// Email/password authentication routes
router.post('/register', register);
router.post('/login', login);
router.post('/reset-password', resetPassword);
router.post('/send-email-code', sendEmailCode); // New route for sending the email code
router.post('/reset-forgotten-password', resetForgottenPassword); // New route for sending the email code

module.exports = router;
