import { Router } from 'express';
import { operadorasController } from '../controllers/operadoras.controller';

const operadorasRouter = Router();

operadorasRouter.get('/', operadorasController.getOperadoras);

export { operadorasRouter };
