const express = require('express');
const router = express.Router();
const auth = require('./auth/network');
const photo = require('./photo/network');
const post = require('./post/network');

router.use('/auth', auth);
router.use('/photos', photo);
router.use('/posts', post);

module.exports = router;