import {
  contatosFake,
  operadorasFake
} from '../../../database/fake_data/index.js';
import { filterByName, paginate } from './fake.helpers.js';

let contatos = contatosFake;
const operadoras = operadorasFake;

export const fakeService = {
  getServiceDescription: function () {
    return 'javascript mock';
  },

  getContatos: async function (pageNumber, limit, findByName) {
    const filteredData = filterByName(contatos, findByName);

    const skip = (pageNumber - 1) * limit;
    const totalCount = filteredData.length;
    const totalPages = Math.ceil(totalCount / limit);
    const paginatedData = paginate(filteredData, skip, limit);

    return { totalCount, totalPages, pageNumber, paginatedData };
  },

  getContato: async function (contatoId) {
    const filtered = contatos.filter((contato) => contato.serial == contatoId);
    return filtered.length ? filtered[0] : null;
  },

  saveContato: async function (contato) {
    contatos.push(contato);
    return contato;
  },

  deleteContato: async function (contatoId) {
    const busca = contatos.filter((contato) => contato.serial == contatoId);
    if (busca.length == 0) {
      return { deleted: false };
    }
    contatos = contatos.filter((contato) => contato.serial != contatoId);

    return { deleted: true };
  },

  getOperadoras: async function () {
    return operadoras;
  }
};
