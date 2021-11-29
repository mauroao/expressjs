import { model, Schema } from 'mongoose';

const operadoraSchema = new Schema({
  categoria: { type: String },
  codigo: { type: String },
  nome: { type: String },
  preco: { type: Number }
});

const operadoraModel = model('Operadora', operadoraSchema);

export { operadoraModel };
