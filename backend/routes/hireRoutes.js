const express = require('express');
const { getHireOfferById, getAllHireOffers, createHireOffer, sendHireResponseMessage } = require('../controllers/hireController');

const router = express.Router();


router.get('/', getAllHireOffers);
router.get('/:id', getHireOfferById);
router.post('/', createHireOffer);
router.post('/accept-hire', sendHireResponseMessage(true));
router.post('/refuse-hire', sendHireResponseMessage(false));

module.exports = router;
