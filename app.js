var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// dados:

var operadoras = [
	{nome: 'Oi', codigo: 14, categoria: 'Celular', preco: 2.0},
	{nome: 'Tim', codigo: 15, categoria: 'Celular', preco: 2.1},
	{nome: 'Vivo', codigo: 41, categoria: 'Celular', preco: 2.2},
	{nome: 'GVT', codigo: 25, categoria: 'Fixo', preco: 2.3},
	{nome: 'Embratel', codigo: 21, categoria: 'Fixo', preco: 2.4}
];

var contatos = [
	{serial: 123456, nome: 'Pedro', telefone: '9999-8888', data: new Date(), operadora: operadoras[0]},
	{serial: 234567, nome: 'Ana', telefone: '9999-8877', data: new Date(), operadora: operadoras[1]},
	{serial: 891234, nome: 'Maria', telefone: '9999-8866', data: new Date(), operadora: operadoras[2]},
	{serial: 923450, nome: 'Antonio da Silva', telefone: '9999-2888', data: new Date(), operadora: operadoras[3]},
	{serial: 934560, nome: 'Ana da Silva', telefone: '9999-8872', data: new Date(), operadora: operadoras[4]},
	{serial: 991230, nome: 'Rubens da Silva', telefone: '9999-8826', data: new Date(), operadora: operadoras[0]}
];

// allow origin:

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// api:

app.get('/', function (req, res) {
  res.send('REST API is Working ! Access: /api/contatos');
});

app.get('/api/contatos', function(req, res) { 		
	res.json(contatos);
});

app.get('/api/contatos/:contatoId', function(req, res) { 	
	var contatoId = (req.params.contatoId || 0);

	var busca = contatos.filter(function(contatoProcurado){
		return contatoProcurado.serial == contatoId;
	});

	if (busca.length == 0) {	
		res.status(404).send('Not found');
		return;	
	};	

	res.json(busca[0]);
});

app.post('/api/contatos', function(req, res) { 	
	contatos.push(req.body)
	res.json(req.body);
});

app.delete('/api/contatos/:contatoId', function(req, res) {
	var contatoId = (req.params.contatoId || 0);

	var busca = contatos.filter(function(contatoProcurado){
		return contatoProcurado.serial == contatoId;
	});

	if (busca.length == 0) {
		res.json({deleted: false});	
		return;	
	};

	contatos = contatos.filter(function(contatoProcurado){
		return contatoProcurado.serial != contatoId;
	});

	res.json({deleted: true});
});

app.get('/api/operadoras', function(req, res) { 		
	res.json(operadoras);
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('API rodando na porta ' + port);
});
