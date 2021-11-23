import contatosData from './contatos.json';
import operadorasData from './operadoras.json';
import { sortBy } from 'underscore';

export const operadorasFake = operadorasData;
export const contatosFake = sortBy(contatosData, (contato) => contato.nome);
