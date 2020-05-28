const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

require('dotenv/config');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

mongoose.connect('mongodb+srv://' + process.env.USERMONGO + ':' + process.env.PASSMONGO + 
                 '@cluster0-wiwwy.mongodb.net/'+process.env.DATABASE+'?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(console.log('Mongo Conectado'));

console.log('Servidor ligado!');


app.listen(process.env.PORT || 3334);

