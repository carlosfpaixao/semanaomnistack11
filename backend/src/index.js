// importar módulo express
const express = require('express');

// importar módulo de autorização
const cors = require('cors');

// importar rotas (arquivo)
const routes = require('./routes');

// criar aplicação
const app = express();

// autorização
app.use(cors());
/*
app.use(cors({
  origin: 'http://meuapp.com'
}));
*/
// antes das requisições express converte json em objeto javascript
app.use(express.json());
// usar rotas
app.use(routes);

// ouvir aplicação na porta 
app.listen(3333);
