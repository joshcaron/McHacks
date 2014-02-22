'use strict'

### Controllers ###

angular.module('app.controllers', [])

.controller 'McHacksJukeboxControl', ($scope) ->
  $scope.title = "McHacks"  
  $scope.name = "Christopher"
  $scope.phone_number = "+14072639482"
  $scope.playbackToken = "GAlTCRLL_____2R2cHlzNHd5ZXg3Z2M0OXdoaDY3aHdrbmxvY2FsaG9zdOfSuK3-btuBIw0X3zm36Uk="
  
  $scope.init = () ->
    $('#api').rdio($scope.playbackToken)
    
    $('#api').bind 'ready.rdio', () ->
      $('#api').rdio().play('a171827')

.controller 'PlaylistControl', ($scope) ->
  $scope.count = 5
  
  $scope.tracks = []
  $scope.current_track = ""

.controller 'PlayerControl', ($scope) ->
  $scope.track = "Timber"
  $scope.artist = "Pitbull, Ke$ha"
  $scope.album = "Global Warming: Meltdown (Deluxe Version)"
  $scope.icon = ""
  $scope.art = ""
  $scope.key = "t38018328"
  
  $scope.playing = false
  
  $scope.position = 0
  $scope.duration = 300
  

  
  $scope.pause = () ->
    console.log "Pausing"
    $scope.playing = false
    
  # Play the song
  $scope.play = () ->
    $.rdio.play($scope.key)
    # $(this).rdio().play($scope.song)
    $scope.playing = true
  
  # When the position of the song changes, update the slider
  $('#api').bind 'positionChanged.rdio', (e, position) ->
    $scope.position = Math.floor(100*position/duration)
