const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes/index');

const app = express();

mongoose.connect(process.env.DB_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then((res)=>{
    app.listen(process.env.PORT || 3000);
})
.catch((err)=>{
    console.log(err);
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use(routes);
app.use((req, res)=>{
    res.status(404).render('404', {title: '404'});
});