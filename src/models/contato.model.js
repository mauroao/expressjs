import { model, Schema } from 'mongoose';

const contatoSchema = new Schema({
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

const contatoModel = model('Contato', contatoSchema);

export { contatoModel };
