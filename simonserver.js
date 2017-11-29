var path = require('path');
var compression = require('compression')
var express = require('express');

var app = express();

app.use(compression())
app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});
