const express = require('express');
const { getPatients } = require('../controllers/patientsController');
const router = express.Router();

router.get('/', getPatients);

module.exports = router;