const express = require('express');
const router = express.Router();
const config = require('../config/config');
const service = require(`../services/${config.getServiceType()}.service`);

router.get('/', service.getOperadoras);

module.exports = router;