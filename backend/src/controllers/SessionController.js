const connection = require('../database/connection');

module.exports = {

  async create(request, response) {

    const { id } = request.body;

    console.debug('ID: ' + id);
    
    const ong = await connection('ongs')
      .where('id', id)
      .select('name')
      .first();
  
    console.debug('ong: ' + ong);
    
    if (!ong) {
      return response.status(400).json({ error: 'No ONG found with this ID'});
    }
  
    return response.json(ong);
  }
}