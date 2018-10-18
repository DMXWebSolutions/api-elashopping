'use strict'

const Birthday = use('App/Models/Birthday');
const Database = use('Database')

class BirthdayController {

    async store({request, response}) {
        try {
            const data = await request.all()
            const person = await Birthday.create({...data})
            return person    
        } catch (error) {
            response.json({ error })
        }
    } 

    async getSubscribersList({response}) {
        const subscribers = await Database.from('ela_inscricao_15_anos')
        return response.status(200).json({ subscribers }) 
    }


}

module.exports = BirthdayController
