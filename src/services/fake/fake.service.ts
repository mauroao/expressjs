import { contatosFake, operadorasFake } from './fake_data';
import { filterByName, paginate } from './fake.helpers';
import { ContatosResult } from '../../domain/entities/contatos-result';
import { Contato } from '../../domain/entities/contato';
import { DeleteContatoResult } from '../../domain/entities/delete-contato-result';
import { Operadora } from '../../domain/entities/operadora';

let contatos = contatosFake;
const operadoras = operadorasFake;

export const fakeService = {
  getServiceDescription: function () {
    return 'javascript mock';
  },

  getContatos: async function (
    pageNumber: number,
    limit: number,
    namePattern: string
  ): Promise<ContatosResult | null> {
    const filteredData = filterByName(contatos, namePattern);

    const skip = (pageNumber - 1) * limit;
    const totalCount = filteredData.length;
    const totalPages = Math.ceil(totalCount / limit);
    const paginatedData = paginate(filteredData, skip, limit);

    return { totalCount, totalPages, pageNumber, paginatedData };
  },

  getContato: async function (contatoId: string): Promise<Contato | null> {
    const filtered = contatos.filter((contato) => contato.serial == contatoId);
    return filtered.length ? filtered[0] : null;
  },

  saveContato: async function (contato: Contato): Promise<Contato> {
    contatos.push(contato);
    return contato;
  },

  deleteContato: async function (
    contatoId: string
  ): Promise<DeleteContatoResult> {
    const busca = contatos.filter((contato) => contato.serial == contatoId);
    if (busca.length == 0) {
      return { deleted: false };
    }
    contatos = contatos.filter((contato) => contato.serial != contatoId);

    return { deleted: true };
  },

  getOperadoras: async function (): Promise<Operadora[]> {
    return operadoras;
  }
};
