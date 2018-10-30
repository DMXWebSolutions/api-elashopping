'use strict'

class MailController {
    async sendMail({ request, response}) {
        const Mail = use('Mail')
        const data = request.only(["nome", "email", "mensagem", "destinatario", "assunto", "loja"])
        try {
            await Mail.send('emails.contact', data, (message) => {
                message
                    .to('contato@elashopping.com.br')
                    .from(data.destinatario)
                    .subject(data.assunto)
            })
            response.json({data})
            
        } catch (error) {
            console.log(error)
            response.json({error})
        }
    }


}

module.exports = MailController
