const express = require('express'); //
const router = require('./routes');

const models  = require('../models');
const Setor = models.Setor;


const app = express();

app.use(express.json());
app.use(router);


app.listen('3000', () => {
    console.log('VAAAAAI DEEEESGRAÇA!!!');
})