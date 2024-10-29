const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const hireSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  number: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  offerMessage: {
    type: String,
    required: true // Default value is false, meaning regular users are not admins
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('Hire', hireSchema);
module.exports = User;
