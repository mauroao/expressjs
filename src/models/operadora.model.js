let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let OperadoraSchema = new Schema({
  categoria: { type: String },
  codigo: { type: String },
  nome: { type: String },
  preco: { type: Number }
});

module.exports = mongoose.model('Operadora', OperadoraSchema);
