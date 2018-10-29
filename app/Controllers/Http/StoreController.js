'use strict'

const Database = use('Database')

class StoreController {

    async getDepartments({ response }) {
        const departaments = await Database.from('ela_tipo')
        return response.status(200).json({ departaments })    
    }

    async getStoresByDepartaments({ params, response}) {
        const stores = await Database
            .select('ela_lojas.id', 'ela_lojas.nome', 'ela_lojas.logotipo', 'ela_lojas.telefone', 'ela_lojas.site', 'ela_loja_tipo.id_tipo', 'ela_lojas.status')
            .from('ela_lojas')
            .innerJoin('ela_loja_tipo', 'ela_lojas.id', 'ela_loja_tipo.id_loja') 
            .where({
                id_tipo: params.id,
                status: 1
            })
            .groupBy('nome')
        return response.status(200).json({ stores })    
    }

    async getStoresById({ params, response}) {
        const stores = await Database
            .select('*')
            .from('ela_lojas')
            .where({
                id: params.id,
                status: 1,
            })
        return response.status(200).json({ stores })    
    }

    async getStoresByFloor({ params, response}) {
        const stores = await Database
            .select('*')
            .from('ela_lojas')
            .where({
                piso: params.piso,
                status: 1,
            })
        return response.status(200).json({ stores })    
    }

    
}

module.exports = StoreController
