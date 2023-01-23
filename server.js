const express = require("express");
const port = 3002
const app = express();
const handlebars =require('express-handlebars');
const bodyParser = require('body-parser')
const Anuncio = require('./models/Anuncio')



app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')



