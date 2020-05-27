# expressjs [![Build Status](https://travis-ci.org/mauroao/expressjs.svg?branch=master)](https://travis-ci.org/mauroao/expressjs)

API REST com Express

[![ExpressJS](https://raw.githubusercontent.com/mauroao/expressjs/master/docs/diagrama.draw.io.png)](https://mauroao-lista-telefonica-api.herokuapp.com)

## Introdução

Este projeto implementa uma API RESTful na plataforma [Node.js](http://nodejs.org) com persistência em [MongoDB](https://www.mongodb.com), com o auxílio das bibliotecas [expressjs](https://expressjs.com) e [mongoose](http://mongoosejs.com).

## Instalação

1. `git clone git@github.com:mauroao/expressjs.git` - clonar do github;
2. `cd expressjs` - entrar no diretório da aplicacão;
3. `npm install` - instalar os pacotes npm;

Dentro do diretório da aplicação, executar o comando `npm install`;

## Configuração

É possível escolher entre dados mockados ou MongoDB, alterando o conteúdo da variável `mocking` para `true` ou `false`, dentro do arquivo `/src/config/config.js`;

A string de conexão do MongoDB é obtida através de uma variável de ambiente, definida conforme o exemplo abaixo:

```bash
export LISTA_TELEFONICA_MONGODB_ADDRESS="mongodb://user:pass@xxxxx.mlab.com:45357/lista-telefonica"
``` 
## Execução

1. `cd expressjs` - entrar no diretório da aplicacão;
2. `npm start` - executar;

## Test (ESLint)

1. `cd expressjs` - entrar no diretório da aplicacão;
2. `npm test` - executar o ESLint;

## Continuous Integration

Este aplicativo possui um pipeline de build configurado no [travis-ci.org](https://travis-ci.org).

## Hospedagem

Este aplicativo está hospedado no [heroku.com](https://www.heroku.com).

## Observações

* Esta API pode ser consumida pelo projeto [mauroao/angular.js](https://github.com/mauroao/angular.js);
* Uma versão na nuvem, publicada no [heroku](https://www.heroku.com/home), está disponível no endereço [https://mauroao-lista-telefonica-api.herokuapp.com](https://mauroao-lista-telefonica-api.herokuapp.com);
