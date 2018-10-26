'use strict'
var PromiseFtp = require('promise-ftp');
  

class FileController {
    async getImagesByYear ({request, response}) {
        const files = []
        var ftp = new PromiseFtp();
        const test = ftp.connect({
            host: 'ftp.elashopping.com.br',
            user: 'elashopping', 
            password: 'Unzh0?61'
        }).then(function (serverMessage) {
            console.log('Server message: '+serverMessage);
            return ftp.list('/mobile.elashopping.com.br/assets/imgs');
        }).then(function (list) {
            return ftp.end();
        });

        console.log(teste)

    }


}

module.exports = FileController
