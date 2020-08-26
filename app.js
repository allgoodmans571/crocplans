const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use('/public', express.static(__dirname + '.public'));

app.get('/', function (req, res) {

  res.sendfile(__dirname + '/html/index.html');
});

console.log("Сервер запущен...");
app.listen(8080);
