const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const index = require('./routes/index');
const contatos = require('./routes/contatos');
const operadoras = require('./routes/operadoras');
const accessControl = require('./middleware/access-control');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', index);
app.use('/api/', accessControl);
app.use('/api/contatos/', contatos);
app.use('/api/operadoras/', operadoras);

app.listen(port, () => {
  console.log(`[OK] => express().listen(${port})`);
});
