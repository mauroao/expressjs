const express = require('express');
const router = express.Router();
const config = require('../config/config');
const service = require(`../services/${config.getServiceType()}.service`);

router.get('/', (req, res) => {
  const responseBody = `
  <html> <head></head> <body style="color: grey;">
    <h2>Lista Telefonica RESTful API</h2>
    <h4>API: </h4>
    <p>
      <code>api/contatos/</code> <br />
      <code>api/operadoras/</code>
    </p>
    <h4>Info:</h4>
    <p>Service type: "<code>${service.getServiceDescription()}</code>" </p>
  </body></html>
  `;
  res.send(responseBody);
});

module.exports = router;
