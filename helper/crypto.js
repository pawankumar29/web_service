//helpr functions for encryption and decryption using crypto module
var crypto = require("crypto");
//for encryption
exports.encrypt = function (text) {
    try {
        var cipher = crypto.createCipher('aes-256-cbc', 'd6F3Efeq')
        var crypted = cipher.update(text, 'utf8', 'hex')
        crypted += cipher.final('hex');
        return crypted;
    } catch (err) {
        return err;
    }
}
//for decryption
exports.decrypt = function (text) {
    try {
        var decipher = crypto.createDecipher('aes-256-cbc', 'd6F3Efeq')
        var dec = decipher.update(text, 'hex', 'utf8')
        dec += decipher.final('utf8');
        return dec;
    } catch (err) {
        return err;
    }
}
