import { Router } from 'express';
import { operadorasController } from '../controllers/operadoras.controller.js';

const operadorasRouter = Router();

operadorasRouter.get('/', operadorasController.getOperadoras);

export { operadorasRouter };
