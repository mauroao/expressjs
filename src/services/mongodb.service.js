let mongoose = require('mongoose');
let Contato = require('../models/contato.model');
let Operadora = require('../models/operadora.model');

let db_path = process.env.LISTA_TELEFONICA_MONGODB_ADDRESS || 'mongodb://127.0.0.1/lista-telefonica';

let options = { 
  keepAlive: 300000, 
  connectTimeoutMS: 30000,
  useNewUrlParser: true,
  useUnifiedTopology: true  
};  

mongoose.Promise = Promise;

mongoose.connect(db_path, options)
  .then(() => { console.log(`[OK] => mongoose.connect('${db_path}')`); })
  .catch(err => {
    console.log(`[Error] => mongoose.connect('${db_path}') : ${err.message} `);
  });

let handleError = (err, res) => {
  var message = (err && err.message) ? err.message : 'Erro desconhecido';
  console.log(`[Error] => ${message}`);
  res.status(500).send(message);
};

const _getContatos = (pageNumber, limit, findName = '') => {
  pageNumber = parseInt(pageNumber);
  limit = parseInt(limit);

  let findNameObject = {};
  if (findName.length > 0) {

    findNameObject = {
      nome: new RegExp(findName, 'i')
    };
  }

  const skipNumber = (pageNumber -1) * limit;

  const paginatedDataPromise = Contato
    .find(findNameObject)
    .sort({nome: 'asc'})
    .skip(skipNumber)
    .limit(limit)
        
    .exec();
    
  const totalCountPromise = Contato  
    .find(findNameObject).select({id: 1}).count().exec();

  return new Promise((resolve, reject) => {

    Promise.all([paginatedDataPromise, totalCountPromise])
      .then(result => {
        const [paginatedData, totalCount] = result;
        const totalPages = Math.ceil(totalCount / limit);

        resolve({
          totalCount: totalCount,
          totalPages: totalPages,
          pageNumber: pageNumber,
          paginatedData: paginatedData
        });

      })
      .catch(err => {
        reject(err);
      });	

  });
};

module.exports = {
  getServiceDescription: () => {
    return `driver: mongoose, address: ${db_path}`;
  },
    
  getContatos: (req, res) => { 	
    let pageNumber = req.query.pagenumber;
    let limit = req.query.limit;
    let findName = req.query.findname || '';

    let promise;

    if (pageNumber && limit) {
      promise = _getContatos(pageNumber, limit, findName);
    } else {
      promise = Contato.find({}).exec();
    }
        
    promise
      .then(result => res.json(result))
      .catch(err => {
        handleError(err, res);
      });	
  },

  getContato: (req, res) => { 	
    let contatoId = (req.params.contatoId || 0);
    let promise = Contato.findOne({ serial: contatoId }).exec();

    promise
      .then(result => {
        if (result) {
          res.json(result);
        } else {
          res.status(404).send('Not found');
        }
      })
      .catch(err => {
        handleError(err, res);
      });
  },

  saveContato: (req, res) => { 	
    let promise = Contato.create(req.body);

    promise
      .then(result => res.json(result))
      .catch(err => {
        handleError(err, res);
      });
  },

  deleteContato: (req, res) => {
    let contatoId = (req.params.contatoId || 0); 
    let promise = Contato.findOneAndRemove({ serial: contatoId }).exec();

    promise
      .then(result => {
        if (result) {
          res.json({deleted: true});
        } else {
          res.json({deleted: false});
        }
      })
      .catch(err => {
        handleError(err, res);
      });        
  },

  getOperadoras: (req, res) => { 		
    let promise = Operadora.find({}).exec();
        
    promise
      .then(result => res.json(result))
      .catch(err => {
        handleError(err, res);
      });	
  }
};
