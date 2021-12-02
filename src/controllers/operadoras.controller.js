import { getService } from '../services/service.factory.js';

const service = getService();

export const operadorasController = {
  getOperadoras: async function (req, res) {
    const operadoras = await service.getOperadoras();
    res.json(operadoras);
  }
};
