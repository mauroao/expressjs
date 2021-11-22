let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ContatoSchema = new Schema({
  serial: { type: String },
  nome: { type: String },
  telefone: { type: String },
  data: {
    type: Date,
    default: Date.now
  },
  operadora: {
    categoria: { type: String },
    codigo: { type: String },
    nome: { type: String },
    preco: { type: Number }
  }
});

module.exports = mongoose.model('Contato', ContatoSchema);
