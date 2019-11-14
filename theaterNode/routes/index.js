const express = require('express');
const theater = require('./theater');
const films = require('./films');
const users = require('./users');

const router = express.Router();

router.use('/theater', theater);
router.use('/films', films);
router.use('/users', users);

module.exports = router;
