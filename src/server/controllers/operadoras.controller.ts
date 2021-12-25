import { getService } from '../../services/service.factory';
import { Request, Response } from 'express';

const service = getService();

export const operadorasController = {
  getOperadoras: async function (req: Request, res: Response) {
    const operadoras = await service.getOperadoras();
    res.json(operadoras);
  }
};
