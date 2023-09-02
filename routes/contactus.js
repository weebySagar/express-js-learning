const express = require('express');
const path = require('path');
const router = express.Router();

const contactUsController = require('../controllers/contactUs')

router.get('/contactus',contactUsController.contactUs);



module.exports = router;