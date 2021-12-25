import { Contato } from './contato';

export type ContatosResult = {
  totalCount: number;
  totalPages: number;
  pageNumber: number;
  paginatedData: Contato[];
};
