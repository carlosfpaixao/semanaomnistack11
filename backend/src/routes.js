// Importar express (facilitador de configurações)
const express = require('express');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');



// módulo de rotas
const routes = express.Router();

//app.get('/users', (request, response) => {
//app.post('/users/:id', (request, response) => {
//routes.post('/users', (request, response) => {

/* routes.post('/Incidents', async (request, response) => {

}); */

routes.post('/sessions', SessionController.create);

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);
routes.get('/profile/', ProfileController.index);

module.exports = routes;