import { getService } from '../services/service.factory.js';

const service = getService();

export const contatosController = {
  getContatos: async function (req, res) {
    const pageNumber = parseInt(req.query.pagenumber || '1');
    const limit = parseInt(req.query.limit || '10');
    const findByName = req.query.findname || '';
    const contatos = await service.getContatos(pageNumber, limit, findByName);
    res.json(contatos);
  },

  getContato: async function (req, res) {
    const contatoId = req.params.contatoId || 0;
    const contato = await service.getContato(contatoId);
    if (!contato) {
      res.status(404).send('Not found');
      return;
    }
    res.json(contato);
  },

  saveContato: async function (req, res) {
    const contato = await service.saveContato(req.body);
    res.json(contato);
  },

  deleteContato: async function (req, res) {
    const contatoId = req.params.contatoId || 0;
    const deleteResult = await service.deleteContato(contatoId);
    res.json(deleteResult);
  }
};
