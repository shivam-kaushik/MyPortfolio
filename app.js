var express = require('express');
var app = express();

app.set('views', './views')
app.set('view engine', 'ejs')
app.use('/', require('./routes/router'));

app.listen(3000);
console.log('Server running at http://localhost:3000/');
module.exports = app;
