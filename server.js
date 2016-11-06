var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

//serve ui/script folder as /scripts route
app.use('/scripts', express.static(path.join(__dirname, 'ui', 'script')));
//serve ui/css folder as /styles route
app.use('/styles', express.static(path.join(__dirname, 'ui', 'css')));
//serve ui/images folder as /images route
app.use('/images', express.static(path.join(__dirname, 'ui', 'images')));
//serve ui/views folder as /views route
app.use('/views', express.static(path.join(__dirname, 'ui', 'views')));
app.use('/fonts', express.static(path.join(__dirname, 'ui', 'fonts')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});





var port = 8080;
app.listen(port, function () {
  console.log('server is running on ', port);
});
