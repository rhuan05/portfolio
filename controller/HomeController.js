const nodemailer = require('nodemailer');
require('dotenv').config();

exports.paginaInicialHome = (req, res)=>{
    res.render('index', { nomeInput: '', emailInput: '', text__areaInput: '' });
};

exports.email_enviado = (req, res)=>{
    const infos = req.body;

    //PAREI AQUI: VALIDANDO OS CAMPOS DO FORMULÁRIO.
    if(!req.body.nome){
        return res.render('index', { nomeInput: 'on' });
    };

    if(!req.body.email){
        return res.render('index', { emailInput: 'on' });
    };

    if(!req.body.text__area){
        return res.render('index', { text__areaInput: 'on' });
    };

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
    res.render('E-mail enviado!');
};