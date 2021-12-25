import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { contatosRouter, operadorasRouter, homeRouter } from './routes';

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());
server.use('/', homeRouter);
server.use('/api/contatos/', contatosRouter);
server.use('/api/operadoras/', operadorasRouter);

export { server };
