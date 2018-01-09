let express = require('express');
let app = express();
let bodyParser = require('body-parser');
// let service = require('./services/mock.service');
let service = require('./services/mongodb.service');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// allow origin:

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// api:

app.get('/',  (req, res) => {
  res.send('REST API is Working ! Access: /api/contatos');
});

app.get('/api/contatos', service.getContatos);

app.get('/api/contatos/:contatoId', service.getContato);

app.post('/api/contatos', service.saveContato);

app.delete('/api/contatos/:contatoId', service.deleteContato);

app.get('/api/operadoras', service.getOperadoras);

let port = process.env.PORT || 3000;

app.listen(port,  () => {
  console.log(`[OK] => express().listen(${port})`);
});