var app = require('../app');
var debug = require('debug')('theproject');
app.set('port', process.env.PORT || 8000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});