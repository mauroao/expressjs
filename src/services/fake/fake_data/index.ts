import { sortBy } from 'underscore';
import { readFileSync } from 'fs';
import path from 'path';
import { Contato } from '../../../domain/entities/contato';
import { Operadora } from '../../../domain/entities/operadora';

function load(fileName: string) {
  const fullPath = path.join('.', 'database', 'fake', fileName);
  return JSON.parse(readFileSync(fullPath, { encoding: 'utf8' }));
}

export const operadorasFake: Operadora[] = load('operadoras.json');
export const contatosFake: Contato[] = sortBy(
  load('contatos.json'),
  (contato) => contato.nome
);
