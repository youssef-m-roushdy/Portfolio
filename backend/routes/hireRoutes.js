const express = require('express');
const { getHireOfferById, getAllHireOffers, createHireOffer, sendHireResponseMessage } = require('../controllers/hireController');
const { authenticateJWT } = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

const router = express.Router();


router.get('/', authenticateJWT, adminMiddleware, getAllHireOffers);
router.get('/:id', authenticateJWT, adminMiddleware, getHireOfferById);
router.post('/', createHireOffer);
router.post('/accept-hire', authenticateJWT, adminMiddleware, sendHireResponseMessage(true));
router.post('/refuse-hire', authenticateJWT, adminMiddleware, sendHireResponseMessage(false));

module.exports = router;
