import { getService } from '../services/service.factory.js';

const service = getService();

export const operadorasController = {
  getOperadoras: function (req, res) {
    const operadoras = service.getOperadoras();
    res.json(operadoras);
  }
};
