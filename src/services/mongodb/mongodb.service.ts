import { handleError, db_path } from './mongodb.helpers';
import { contatoModel } from './models/contato.model';
import { operadoraModel } from './models/operadora.model';
import { Operadora } from '../../domain/entities/operadora';
import { DeleteContatoResult } from '../../domain/entities/delete-contato-result';
import { Contato } from '../../domain/entities/contato';
import { ContatosResult } from '../../domain/entities/contatos-result';

export const mongoDbService = {
  getServiceDescription: () => {
    return `driver: mongoose, address: ${db_path}`;
  },

  getContatos: async function (
    pageNumber: number,
    limit: number,
    namePattern: string
  ): Promise<ContatosResult | null> {
    const filterQuery = namePattern
      ? {
          nome: new RegExp(namePattern, 'i')
        }
      : {};

    const skip = (pageNumber - 1) * limit;

    try {
      const paginatedData = await contatoModel
        .find(filterQuery)
        .sort({ nome: 'asc' })
        .skip(skip)
        .limit(limit)
        .exec();

      const totalCount = await contatoModel
        .find(filterQuery)
        .select({ id: 1 })
        .count()
        .exec();

      const totalPages = Math.ceil(totalCount / limit);

      return {
        totalCount,
        totalPages,
        pageNumber,
        paginatedData
      };
    } catch (error) {
      handleError(error);
      return null;
    }
  },

  getContato: async function (contatoId: string): Promise<Contato | null> {
    try {
      return await contatoModel.findOne({ serial: contatoId }).exec();
    } catch (err: unknown) {
      handleError(err);
      return null;
    }
  },

  saveContato: async function (contato: Contato): Promise<Contato> {
    try {
      await contatoModel.create(contato);
      return contato;
    } catch (error: unknown) {
      handleError(error);
      return contato;
    }
  },

  deleteContato: async function (
    contatoId: string
  ): Promise<DeleteContatoResult> {
    try {
      const deleted = await contatoModel
        .findOneAndRemove({ serial: contatoId })
        .exec();
      return { deleted: deleted };
    } catch (error: unknown) {
      handleError(error);
      return { deleted: false };
    }
  },

  getOperadoras: async function (): Promise<Operadora[]> {
    try {
      return await operadoraModel.find({}).exec();
    } catch (error: unknown) {
      handleError(error);
      return [];
    }
  }
};
