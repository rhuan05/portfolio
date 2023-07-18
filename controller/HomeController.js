const nodemailer = require('nodemailer');
require('dotenv').config();

exports.paginaInicialHome = (req, res)=>{
    res.render('index');
};

exports.email_enviado = (req, res)=>{
    const infos = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rhuan.workana@gmail.com',
            pass: process.env.PASS_GMAIL
        }
    });
    
    transporter.sendMail({
        from: 'rhuan.workana@gmail.com',
        to: 'rhuanhenrique964@gmail.com',
        subject: 'Título do e-mail',
        text: 'Texto do e-mail'
    }).then(message => {
        console.log('E-mail enviado!: ' + message);
    }).catch(err => {
        console.log('ERRO: ' + err);
    });
    res.send('E-mail enviado!');
};