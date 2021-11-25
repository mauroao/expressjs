import { Router } from 'express';
import { contatosController } from '../controllers/contatos.controller.js';

const contatosRouter = Router();

contatosRouter.get('/', contatosController.getContatos);
contatosRouter.get('/:contatoId', contatosController.getContato);
contatosRouter.post('/', contatosController.saveContato);
contatosRouter.delete('/:contatoId', contatosController.deleteContato);

export { contatosRouter };
