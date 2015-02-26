module.exports =
  connection:
    host: '192.168.178.110'
    port: 9090

try
  module.exports = require './config.local'
catch e


