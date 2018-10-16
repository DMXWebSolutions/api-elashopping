'use strict'

const Model = use('Model')

class Birthday extends Model {
    static get table () {
        return 'ela_inscricao_15_anos'
    }
}

module.exports = Birthday
