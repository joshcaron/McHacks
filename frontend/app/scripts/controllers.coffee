'use strict'

### Controllers ###

angular.module('app.controllers', [])
  
.controller 'McHacksJukeboxControl', ($scope) ->
  $scope.title = "McHacks"  
  $scope.name = "Christopher"
  $scope.phone_number = "+14072639482"
  
.controller 'PlaylistControl', ($scope) ->
  $scope.count = 5

.controller 'PlayerControl', ($scope) ->
  $scope.track = "Timber"
  $scope.artist = "Pitbull, Ke$ha"
  $scope.album = "Global Warming: Meltdown (Deluxe Version)"
  $scope.playbackToken = "XYZ"
  $scope.icon = ""
  $scope.art = ""