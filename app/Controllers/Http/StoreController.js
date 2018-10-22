'use strict'

const Database = use('Database')

class StoreController {

    async getDepartments({ response }) {
        const departaments = await Database.from('ela_tipo')
        return response.status(200).json({ departaments })    
    }

    async getStoresByDepartaments({ params, response}) {
        const stores = await Database
            .select('ela_lojas.id', 'ela_lojas.nome', 'ela_loja_tipo.id_tipo')
            .from('ela_lojas')
            .innerJoin('ela_loja_tipo', 'ela_lojas.id', 'ela_loja_tipo.id_loja') 
            .where('ela_loja_tipo.id_tipo', params.id)
            .groupBy('nome')
        return response.status(200).json({ stores })    
    }

    async getStoresById({ params, response}) {
        const stores = await Database
            .select('*')
            .from('ela_lojas')
            .where('id', params.id)
        return response.status(200).json({ stores })    
    }
}

module.exports = StoreController
