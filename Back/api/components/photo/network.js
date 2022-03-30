const express = require('express');
const router = express.Router();
const { getPhotos } = require('./controller');

router.get('/', getPhotos);

module.exports = router;
