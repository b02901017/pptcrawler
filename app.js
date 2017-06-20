'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _api = require('./lib/api/');

var _api2 = _interopRequireDefault(_api);

var _webpack3 = require('./webpack.config');

var _webpack4 = _interopRequireDefault(_webpack3);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dbConfig = _config2.default[process.env.NODE_ENV];
_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect('mongodb://' + 'cc2017' + ':' + '12345' + '@104.198.249.209:27017/mydb');

var db = _mongoose2.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connected');
});

var port = process.env.PORT || 3000;
var app = (0, _express2.default)();
var compiler = (0, _webpack2.default)(_webpack4.default);

app.use(_bodyParser2.default.urlencoded({
  extended: true
}));
app.use(_bodyParser2.default.json());

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: _webpack4.default.output.publicPath,
  stats: {
    colors: true
  }
}));
app.use('/api', _api2.default);
app.use('/static', _express2.default.static('public'));
app.get('*', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, 'index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:' + port);
});