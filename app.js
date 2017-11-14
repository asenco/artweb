const express = require('express');
const app = express();
require('./modules/landing/server/routes/landing')(app);
require('./modules/login/server/routes/login')(app);
require('./modules/home/server/routes/home')(app);
require('./modules/newUserRegistration/server/routes/newUserRegistration')(app);

var mongoose = require('mongoose');

global.db = (global.db ? 
             global.db : 
             mongoose.createConnection('mongodb://localhost:27017/artweb'));

app.get('/', function (req, res) {
  res.redirect('/landing');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});