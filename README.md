[![Node.js CI](https://github.com/mauroao/expressjs/actions/workflows/node.js.yml/badge.svg)](https://github.com/mauroao/expressjs/actions/workflows/node.js.yml)
# Phone Book API

[![ExpressJS](https://raw.githubusercontent.com/mauroao/expressjs/master/docs/diagrama.draw.io.png)](https://mauroao-lista-telefonica-api.herokuapp.com)

## What is Phone Book API?

- "Phone Book API" is a personal Node.js API for study purposes;
- It uses [expressjs](https://expressjs.com);
- It uses [mongoose](http://mongoosejs.com);
- It uses [MongoDB](https://www.mongodb.com);
- This app is hosted at [heroku.com](https://www.heroku.com);

## Prerequisites

- [Node.js v16.13.0](http://nodejs.org);
- [Visual Studio Code](https://code.visualstudio.com) (install theese plugins: ESLint and EditorConfig);

## Get Started

Open terminal, type the following commands:
```bash
> git clone git@github.com:mauroao/expressjs.git
> cd expressjs
> npm install
```

## Configure

- Open `/src/config/config.js` file;
- Change the value of `mocking` variable to `true` or `false`;
- If `true`: the api will load mock data;
- If `false` api will load data from a mongo db instance;
- If database is choosen, configure an environment variable to set the database connection string as follows:

```bash
> export LISTA_TELEFONICA_MONGODB_ADDRESS="mongodb://user:pass@xxxxx.mlab.com:45357/lista-telefonica"
```

## Run
```bash
> npm start
```

## Run lint

```bash
> npm test
```

## Remarks

* This API is consumed by another project: [mauroao/angular.js](https://github.com/mauroao/angular.js);
* This API is published at [https://mauroao-lista-telefonica-api.herokuapp.com](https://mauroao-lista-telefonica-api.herokuapp.com);
