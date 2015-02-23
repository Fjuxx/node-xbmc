#!/usr/bin/env coffee

# clear terminal
#process.stdout.write '\u001B[2J\u001B[0;0f'

{TCPConnection, XbmcApi} = require '..'
config =                   require './config'

connection = new TCPConnection
  host:       config.connection.host
  port:       config.connection.port
  verbose:    false
xbmcApi = new XbmcApi
  silent:     true
  connection: connection

setTimeout (=> 
  xbmcApi.player.stop -> console.log 'test'
  console.log 'done'),3000

