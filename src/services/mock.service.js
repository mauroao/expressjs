import {
  contatosFake,
  operadorasFake
} from '../../database/fake_data/index.js';

let contatos = contatosFake;
const operadoras = operadorasFake;

function filterByName(data, namePattern) {
  if (!namePattern) {
    return data;
  }
  const regx = new RegExp(namePattern, 'i');
  return data.filter((item) => {
    return regx.test(item.nome);
  });
}

function paginate(data, skip, take) {
  const start = skip;
  const end = skip + take;
  return data.slice(start, end);
}

export const fakeService = {
  getServiceDescription: function () {
    return 'javascript mock';
  },

  getContatos: function (pageNumber, limit, findByName) {
    const filteredData = filterByName(contatos, findByName);

    const skip = (pageNumber - 1) * limit;
    const totalCount = filteredData.length;
    const totalPages = Math.ceil(totalCount / limit);
    const paginatedData = paginate(filteredData, skip, limit);

    return { totalCount, totalPages, pageNumber, paginatedData };
  },

  getContato: function (contatoId) {
    return contatos.filter((contato) => contato.serial == contatoId);
  },

  saveContato: function (contato) {
    contatos.push(contato);
    return contato;
  },

  deleteContato: function (contatoId) {
    const busca = contatos.filter((contato) => contato.serial == contatoId);
    if (busca.length == 0) {
      return { deleted: false };
    }
    contatos = contatos.filter((contato) => contato.serial != contatoId);

    return { deleted: true };
  },

  getOperadoras: function () {
    return operadoras;
  }
};
