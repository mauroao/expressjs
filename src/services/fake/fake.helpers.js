export function filterByName(data, namePattern) {
  if (!namePattern) {
    return data;
  }
  const regx = new RegExp(namePattern, 'i');
  return data.filter((item) => {
    return regx.test(item.nome);
  });
}

export function paginate(data, skip, take) {
  const start = skip;
  const end = skip + take;
  return data.slice(start, end);
}
