const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv/config');

const app = express();
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb+srv://' + process.env.USERMONGO + ':' + process.env.PASSMONGO + 
                 '@cluster0-wiwwy.mongodb.net/'+process.env.DATABASE+'?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(console.log('Mongo Conectado'));

console.log('Servidor ligado!');

app.listen(process.env.PORT || 3334);

