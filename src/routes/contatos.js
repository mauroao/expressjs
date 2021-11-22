const express = require('express');
const router = express.Router();
const service = require('../services/service.factory').getService();

router.get('/', service.getContatos);
router.get('/:contatoId', service.getContato);
router.post('/', service.saveContato);
router.delete('/:contatoId', service.deleteContato);

module.exports = router;
