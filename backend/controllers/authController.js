const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const generateToken = require('../utils/jwtToken');
require('dotenv').config();
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.API_SENDGRID,
    },
  })
);


// Register with email and password
exports.register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!email || !name || !password || !confirmPassword) {
    return res.status(400).json({ message: 'You must fill all fields', success: false });
  }

  if (password.length < 8) {
    return res.status(400).json({ message: 'Password must be 8 characters', success: false });
  }

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: 'User already exists', success: false });
    }

    if (password !== confirmPassword) { // Corrected this line
      return res.status(400).json({ message: 'Passwords do not match.', success: false });
    }

    user = new User({
      name,
      email,
      password, // Password will be hashed automatically by User model's pre-save hook
    });

    await user.save();

    // Generate JWT token (if needed)
    res.status(201).json({ message: "User registered successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

// Login with email and password
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if(!email || !password) {
    return res.status(400).json({ message: 'Enter both eamil and password to login', success: false });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid email', success: false });
    }

    if(user.googleId && !user.password)
    {
      return res.status(400).json({ message: 'This is google gmail try login using gmail and set password to login manualy', success: false });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' , success: false });
    }

    // Generate JWT token
    const token = generateToken(user);
    res.status(200).json({ message: "Login successfully" , token: token, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

exports.resetPassword = async (req, res) => {
  const { newPassword, confirmPassword } = req.body;

  if (!newPassword || !confirmPassword) {
      return res.status(400).json({ message: 'Please provide both new password and confirmation password.', success: false });
  }
  
  if (newPassword !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match.' });
  }

  if (newPassword.length < 8) {
      return res.status(400).json({ message: 'Password must be at least 8 characters long.' , success: false});
  }

  try {
      const user = req.user;
      
      user.password = newPassword;
      
      await user.save();

      res.status(200).json({ message: 'Password reset successfully.' , success: false});
  } catch (error) {
      res.status(500).json({ message: 'Server error, please try again.' , success: false});
  }
}


exports.sendEmailCode = async (req, res) => {
  try {
    const { email } = req.body;

    // Step 1: Validate the email input
    if (!email) {
      return res.status(400).send({
        success: false,
        message: "Please enter your email",
      });
    }

    // Step 2: Check if the email is associated with a user
    const isUserEmail = await User.findOne({ email: email });
    if (!isUserEmail) {
      return res.status(404).send({
        success: false,
        message: "There is no user with that email",
      });
    }

    const resetCode = Math.floor(100000 + Math.random() * 900000).toString();
    isUserEmail.resetCode = resetCode;

    // Save the updated user with resetCode
    await isUserEmail.save();

    // Send the reset code via email
    await transporter.sendMail({
      to: email, // Send to the user's email
      from: "yossefmahmoud442004@gmail.com",
      subject: "Password Reset Code",
      html: `
        <h5>Reset Your Password</h5>
        <p>Your password reset code is: <strong>${resetCode}</strong></p>
        <p>Please use this code to reset your password.</p>
      `,
    });

    return res.status(200).send({
      success: true,
      message: "A password reset code has been sent to your email.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};


exports.resetForgottenPassword = async (req, res) => {
  const { code, newPassword, confirmPassword } = req.body;

  try {
    // Step 1: Validate input
    if (!code || !newPassword || !confirmPassword) {
      return res.status(400).send({
        success: false,
        message: "Code, new password, and confirmation password are required",
      });
    }

    // Step 2: Check if new password and confirmation password match
    if (newPassword !== confirmPassword) {
      return res.status(400).send({
        success: false,
        message: "New password and confirmation password do not match",
      });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long.",
      });
    }

    // Step 3: Find the user by the reset code
    const user = await User.findOne({ resetCode: code });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Invalid reset code",
      });
    }

    // Step 4: Update the user's password (it will be hashed automatically by the schema middleware)
    user.password = newPassword;
    user.resetCode = null; // Clear the reset code after successful reset
    await user.save();

    // Step 5: Send success response
    return res.status(200).send({
      success: true,
      message: "Password has been successfully reset",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "An error occurred while resetting the password",
      error,
    });
  }
};