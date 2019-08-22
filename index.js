const express = require('express');
const app = express();
const path = require('path');

//module
const routes = require('./routes');

//set engine pug
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './view'))
app.use(express.static('statiscs'))

//routes
routes(app);

app.listen(2020, () => {
    console.log("Aplikasi Berjalan Pada Port ", 2020);
})