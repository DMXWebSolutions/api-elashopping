'use strict'

const Birthday = use('App/Models/Birthday');


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
}

module.exports = BirthdayController
