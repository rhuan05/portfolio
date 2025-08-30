const express = require('express');
const app = express();
const routes = require('./routes/routes');
const path = require('path');

app.set('views', path.join(__dirname, '../frontend/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../frontend/public')));

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, ()=>{
    console.log('Servidor rodando!');
});