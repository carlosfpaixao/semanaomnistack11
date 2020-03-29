// Importar conexões
const connection = require('../database/connection');

// Importar crypto (criptografia/matemática)
const crypto = require('crypto');

module.exports = {

  async index(request, response) {

    const ongs = await connection('ongs').select('*');
  
    return response.json(ongs);
  },

  async create(request, response) {
    //return response.send('Hello World')
    /* const params = request.query;
    console.log(params); */
    /* const params = request.params;
    console.log(params); */
    /* const params = request.body;
    console.log(params); */
    const {name, email, whatsapp, city, uf} = request.body;
    // 4 bytes de caracteres hexadecimais
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    /* return response.json({
      evento: "Semana OmniStack 11.0",
      aluno: 'Carlos Paixão'
    } */
    return response.json({ id });
  }
}