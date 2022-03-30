const express = require('express');
const router = express.Router();
const { createUser, logIn } = require('./controller');

router.post('/register', createUser);
router.get('/register', logIn);

module.exports = router;