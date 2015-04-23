#pubsub = require './PubSub'
debug = require('debug') 'xbmc:Handlers'

class Handlers
  @mixin: (@api) ->
    debug 'mixin'
    @api.handlers = {}
    @api.handlers[name] = method for name, method of @
    delete @api.handlers.mixin

  @players: (data) =>
    debug 'players', data
    playerId = (data.result?[0] || data.player || {}).playerid
    if playerId
      if playerId == -1
        playerId = 1
      dfd = @api.send 'Player.GetItem', { playerid: playerId }
      dfd.then @playerItem

  @playerItem: (data) =>
    debug 'playerItem', data
    unless data.result?.item.id
      if data?.result? then param = data.result.item else param = null
      @api.pubsub.emit 'api:video', param
    else
      data = data.result.item
      fn = @api.media[data.type]
      if fn
        fn data.id
      else
        console.log 'Unhandled played item:', data

module.exports = Handlers
