'use strict'

class MailController {
    async sendMail({ request, response}) {
        const Mail = use('Mail')
        try {
            await Mail.raw('plain text email', (message) => {
                message.from('suporte@dmxweb.com.br')
                message.to('suporte@dmxweb.com.br')
            })
            response.json({data: 'e-mail enviado com sucesso'})
            
        } catch (error) {
            console.log(error)
            response.json({error})
        }
    }


}

module.exports = MailController
