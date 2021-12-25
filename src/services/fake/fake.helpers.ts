import { Contato } from '../../domain/entities/contato';

export function filterByName(data: Contato[], namePattern: string) {
  if (!namePattern) {
    return data;
  }
  const regx = new RegExp(namePattern, 'i');
  return data.filter((item) => {
    return regx.test(item.nome);
  });
}

export function paginate(data: Contato[], skip: number, take: number) {
  const start = skip;
  const end = skip + take;
  return data.slice(start, end);
}
