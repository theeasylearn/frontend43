var nodemailer = require('nodemailer');
class EMail 
{
    constructor()
    {

        this.sender = 'mmax40681@gmail.com';
        this.password = 'souq lyse erdg vgfu';
        this.MailSender = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
              user: this.sender,
              pass: this.password,
            },
          });
        this.MailSender.verify().then(console.log).catch(console.error);
    }
    send(receiver,subject,message)
    {
        this.MailSender.sendMail({
            from: `<${this.sender}>`, // sender address
            to: receiver, // list of receivers
            subject: subject, // Subject line
            html: message, // html body
          }).then(info => {console.log({info});}).catch(console.error);
    }
}
module.exports.EMail = EMail;