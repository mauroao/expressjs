const express = require('express');
const router = express.Router();
const service = require('../services/service.factory').getService();

router.get('/', service.getOperadoras);

module.exports = router;