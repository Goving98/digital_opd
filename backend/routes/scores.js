const express = require('express');
const { saveScore } = require('../controllers/scoresController');
const router = express.Router();

router.post('/', saveScore);

module.exports = router;