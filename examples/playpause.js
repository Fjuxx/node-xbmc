// Generated by CoffeeScript 1.9.1
(function() {
  var TCPConnection, XbmcApi, config, connection, ref, xbmcApi;

  ref = require('..'), TCPConnection = ref.TCPConnection, XbmcApi = ref.XbmcApi;

  config = require('./config');

  connection = new TCPConnection({
    host: config.connection.host,
    port: config.connection.port,
    verbose: false
  });

  xbmcApi = new XbmcApi({
    silent: true,
    connection: connection
  });

  setTimeout(((function(_this) {
    return function() {
      xbmcApi.player.stop(function() {
        return console.log('test');
      });
      return console.log('done');
    };
  })(this)), 3000);

}).call(this);
