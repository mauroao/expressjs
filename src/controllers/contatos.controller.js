import { getService } from '../services/service.factory.js';

const service = getService();

export const contatosController = {
  getContatos: function (req, res) {
    const pageNumber = parseInt(req.query.pagenumber || '1');
    const limit = parseInt(req.query.limit || '10');
    const findByName = req.query.findname || '';
    const contatos = service.getContatos(pageNumber, limit, findByName);
    res.json(contatos);
  },

  getContato: function (req, res) {
    const contatoId = req.params.contatoId || 0;
    const contatos = service.getContato(contatoId);
    if (contatos.length == 0) {
      res.status(404).send('Not found');
      return;
    }
    res.json(contatos[0]);
  },

  saveContato: function (req, res) {
    const contato = service.saveContato(req.body);
    res.json(contato);
  },

  deleteContato: function (req, res) {
    const contatoId = req.params.contatoId || 0;
    const deleteResult = service.deleteContato(contatoId);
    res.json(deleteResult);
  }
};
