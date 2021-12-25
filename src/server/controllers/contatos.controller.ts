import { getService } from '../../services/service.factory';
import { Request, Response } from 'express';

const service = getService();

export const contatosController = {
  getContatos: async function (req: Request, res: Response) {
    const pageNumber = parseInt((req.query['pagenumber'] as string) || '1');
    const limit = parseInt((req.query['limit'] as string) || '10');
    const findByName: string = (req.query['findname'] as string) || '';

    const contatos = await service.getContatos(pageNumber, limit, findByName);
    res.json(contatos);
  },

  getContato: async function (req: Request, res: Response) {
    const contatoId: string = req.params['contatoId'] || '0';
    const contato = await service.getContato(contatoId);
    if (!contato) {
      res.status(404).send('Not found');
      return;
    }
    res.json(contato);
  },

  saveContato: async function (req: Request, res: Response) {
    const contato = await service.saveContato(req.body);
    res.json(contato);
  },

  deleteContato: async function (req: Request, res: Response) {
    const contatoId: string = req.params['contatoId'] || '0';
    const deleteResult = await service.deleteContato(contatoId);
    res.json(deleteResult);
  }
};
