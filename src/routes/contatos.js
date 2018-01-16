const express = require('express');
const router = express.Router();
const config = require('../config/config');
const service = require(`../services/${config.getServiceType()}.service`);

router.get('/', service.getContatos);
router.get('/:contatoId', service.getContato);
router.post('/', service.saveContato);
router.delete('/:contatoId', service.deleteContato);

module.exports = router;