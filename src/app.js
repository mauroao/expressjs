let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let config = require('./config/config');
let service = require(`./services/${config.getServiceType()}.service`);

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
  let responseBody = `
<html> <head></head> <body style="color: grey;">
  <h2>Lista Telefonica RESTful API</h2>
  <h4>API: </h4>
  <p>
    <code>api/contatos/</code> <br />
    <code>api/operadoras/</code>
  </p>
  <h4>Info:</h4>
  <p>Service Type: "<code>${service.getServiceDescription()}</code>" </p>
</body></html>
`;
  res.send(responseBody);
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
