# How to generate fake data (contatos.json)

- Copy the following text:

```javascript
[
  '{{repeat(400, 400)}}',
  {
    serial: function(tags, index) {
      return tags.integer(100000, 999999).toString();
    },
    nome: '{{firstName()}} {{surname()}}',
    telefone: '{{integer(10000, 20000)}}-{{integer(1000, 2000)}}',
    data: '{{date(new Date(2014, 0, 1), new Date(), "ISODateTime")}}',
    operadora: {
      categoria: 'Celular',
      codigo: '14',
      nome: 'Oi',
      preco: 2
    }
  }
]
```
- Go to https://www.json-generator.com/# ;
- Paste the text into left pannel;
- Press "Generate" button;
- Copy result text from right pannel;
- Paste text into contatos.json file;
