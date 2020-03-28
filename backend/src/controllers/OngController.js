const crypto = require('crypto');
const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body; //Faz a desestruturação do objeto e armazena cada valor em uma variável
    
        const id = generateUniqueId();
    
        //await sinaliza para esperar executar para só então retornar o final
        await connection('ongs').insert({
            id,
            name, 
            email,
            whatsapp,
            city,
            uf
        })
    
        return response.json({ id }); //retorna o id para exibição para a ong
    }
}