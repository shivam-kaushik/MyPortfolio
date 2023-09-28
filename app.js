// Name: Shivam Kaushik
// Student Node.: 301363333
// Date: 27th Sep 2023

var express = require('express');
var app = express();

app.set('views', './views')
app.set('view engine', 'ejs')
app.use('/', require('./routes/index.router'));
app.use(express.static('./public'));
app.use(express.static("./node_modules"));

app.listen(3000);
console.log('Server running at http://localhost:3000/');
module.exports = app;
