import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import {
  contatosRouter,
  operadorasRouter,
  homeRouter
} from './routes/index.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', homeRouter);
app.use('/api/contatos/', contatosRouter);
app.use('/api/operadoras/', operadorasRouter);

app.listen(port, () => {
  console.log(`[OK] => express().listen(${port})`);
});
