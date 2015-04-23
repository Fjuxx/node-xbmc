// Generated by CoffeeScript 1.9.1
(function() {
  var TCPConnection, XbmcApi, config, connection, connection1, xbmcApi, xbmcApi1;

  process.stdout.write('\u001B[2J\u001B[0;0f');

  TCPConnection = require('../lib/TCPConnection');

  XbmcApi = require('../lib/XbmcApi');

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

  xbmcApi.on('connection:data', function() {
    return console.log('1onData');
  });

  xbmcApi.on('connection:open', function() {
    return console.log('1onOpen');
  });

  xbmcApi.on('connection:close', function() {
    return console.log('1onClose');
  });

  xbmcApi.on('connection:error', function() {
    return console.log('1onError');
  });

  connection1 = new TCPConnection({
    host: '192.168.178.111',
    port: config.connection.port,
    verbose: false
  });

  xbmcApi1 = new XbmcApi({
    silent: true,
    connection: connection1
  });

  xbmcApi1.on('connection:data', function() {
    return console.log('2onData');
  });

  xbmcApi1.on('connection:open', function() {
    return console.log('2onOpen');
  });

  xbmcApi1.on('connection:close', function() {
    return console.log('2onClose');
  });

  xbmcApi1.on('connection:error', function() {
    return console.log('2onError');
  });

}).call(this);