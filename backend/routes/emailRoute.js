const express = require('express');
const {sendEmailController} = require('../controllers/emailController');

const router = express.Router()

router.post('/', sendEmailController)

module.exports = router