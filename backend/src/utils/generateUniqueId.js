const crypto = require('crypto');

module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX'); //Cria 4bytes de caracteres e transforma em uma string hexadecimal
}