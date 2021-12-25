import mongoose from 'mongoose';

const operadoraSchema = new mongoose.Schema({
  categoria: { type: String },
  codigo: { type: String },
  nome: { type: String },
  preco: { type: Number }
});

export const operadoraModel = mongoose.model('Operadora', operadoraSchema);
