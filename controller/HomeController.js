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
            user: 'rhuanhenrique964@gmail.com',
            pass: process.env.PASS_GMAIL
        }
    });
    
    transporter.sendMail({
        from: infos.email,
        to: 'rhuanhenrique964@gmail.com',
        subject: `Portfólio Rhuan: ${infos.nome}`,
        html: infos.text__area + '<br><br>' + infos.email
    }).then(message => {
        console.log('E-mail enviado!');
    }).catch(err => {
        console.log('ERRO: ' + err);
    });
    res.send('E-mail enviado!');
};