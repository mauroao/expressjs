import { Operadora } from './operadora';

export type Contato = {
  serial: string;
  nome: string;
  telefone: string;
  data: Date;
  operadora: Operadora;
};
