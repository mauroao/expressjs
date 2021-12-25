import { Contato } from '../entities/contato';
import { ContatosResult } from '../entities/contatos-result';

export interface ContatoRepository {
  getContatos: (
    pageNumber: number,
    limit: number,
    namePattern: string
  ) => Promise<ContatosResult | null>;
  getContato: (contatoId: number) => Promise<Contato | null>;
}
