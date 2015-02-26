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

xbmcApi.on 'connection:open',                     (=> 
  xbmcApi.player.getCurrentlyPlaying  (data) -> 
    console.log data
    #console.log data.result.item.artist[0]
  console.log 'done')

