const express = require('express');
const app = express();
const routes = require('./routes/routes');
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.use(express.static(path.join(__dirname + '/public')));

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, ()=>{
    console.log('Servidor rodando!');
});