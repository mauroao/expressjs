import { sortBy } from 'underscore';
import { readFileSync } from 'fs';

function load(path) {
  return JSON.parse(readFileSync(new URL(path, import.meta.url)));
}

export const operadorasFake = load('./operadoras.json');
export const contatosFake = sortBy(load('./contatos.json'), (contato) => contato.nome);
