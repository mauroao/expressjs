import mongoose from 'mongoose';

const options = {
  keepAlive: true,
  connectTimeoutMS: 30000,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.Promise = Promise;

export const db_path =
  process.env.LISTA_TELEFONICA_MONGODB_ADDRESS ||
  'mongodb://127.0.0.1/lista-telefonica';

export function connectToMongoDb() {
  if (mongoose.connection.readyState != 0) {
    return;
  }

  console.log('connecting to ', db_path, '...');
  mongoose
    .connect(db_path, options)
    .then(() => {
      console.log(`[OK] => mongoose.connect('${db_path}')`);
    })
    .catch((err) => {
      console.log(
        `[Error] => mongoose.connect('${db_path}') : ${err.message} `
      );
    });
}

export const handleError = (err) => {
  var message = err && err.message ? err.message : 'Erro desconhecido';
  console.log(`[Mongo DB service error] => ${message}`);
};
