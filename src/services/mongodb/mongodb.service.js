import { handleError, db_path } from './mongodb.helpers.js';
import { contatoModel } from './models/contato.model.js';
import { operadoraModel } from './models/operadora.model.js';

export const mongoDbService = {
  getServiceDescription: () => {
    return `driver: mongoose, address: ${db_path}`;
  },

  getContatos: async function (pageNumber, limit, namePattern) {
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
    }
  },

  getContato: async function (contatoId) {
    try {
      return await contatoModel.findOne({ serial: contatoId }).exec();
    } catch (error) {
      handleError(error);
    }
  },

  saveContato: async function (contato) {
    try {
      await contatoModel.create(contato);
      return contato;
    } catch (error) {
      handleError(error);
    }
  },

  deleteContato: async function (contatoId) {
    try {
      const deleted = await contatoModel
        .findOneAndRemove({ serial: contatoId })
        .exec();
      return { deleted: deleted };
    } catch (error) {
      handleError(error);
    }
  },

  getOperadoras: async function () {
    try {
      return await operadoraModel.find({}).exec();
    } catch (error) {
      handleError(error);
    }
  }
};
