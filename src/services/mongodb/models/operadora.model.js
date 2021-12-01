import mongoose from 'mongoose';

const operadoraSchema = new mongoose.Schema({
  categoria: { type: String },
  codigo: { type: String },
  nome: { type: String },
  preco: { type: Number }
});

const operadoraModel = mongoose.model('Operadora', operadoraSchema);

export { operadoraModel };
