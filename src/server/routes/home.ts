import { Router } from 'express';

import { homeController } from '../controllers/home.controller';

const homeRouter = Router();

homeRouter.get('/', (req, res) => {
  const responseBody = `
  <html> <head></head> <body style="color: grey;">
    <h2>Lista Telefonica RESTful API</h2>
    <h4>API: </h4>
    <p>
      <code>api/contatos/</code> <br />
      <code>api/operadoras/</code>
    </p>
    <h4>Info:</h4>
    <p>Service type: "<code>${homeController.getServiceDescription()}</code>" </p>
  </body></html>
  `;
  res.send(responseBody);
});

export { homeRouter };
