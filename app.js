const express = require('express');
const app = express();
require('./modules/landing/server/routes/landing')(app);
require('./modules/login/server/routes/login')(app);
require('./modules/home/server/routes/home')(app);


app.get('/', function (req, res) {
  res.redirect('/landing');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});