let mongoose = require('mongoose');
let Contato = require('../models/contato.model');
let Operadora = require('../models/operadora.model');

let db_path = 'mongodb://mlab:mlab@ds245357.mlab.com:45357/lista-telefonica';
//let db_path = 'mongodb://127.0.0.1/lista-telefonica';

let options = { 
    useMongoClient: true,
    keepAlive: 300000, 
    connectTimeoutMS: 30000 
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

module.exports = {
    
    getContatos: (req, res) => { 	
        let promise = Contato.find({}).exec();
        
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