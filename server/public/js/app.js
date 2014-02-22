'use strict';
var App;

App = angular.module('app', ['ngCookies', 'ngResource', 'ngRoute', 'app.controllers', 'app.directives', 'app.filters', 'app.services', 'partials']);

App.config([
  '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider, config) {
    $routeProvider.when('/todo', {
      templateUrl: '/partials/todo.html'
    }).when('/player', {
      templateUrl: '/partials/player.html'
    }).otherwise({
      redirectTo: '/todo'
    });
    return $locationProvider.html5Mode(false);
  }
]);
;'use strict';
/* Controllers*/

angular.module('app.controllers', []).controller('McHacksJukeboxControl', function($scope) {
  $scope.title = "McHacks";
  $scope.name = "Christopher";
  $scope.phone_number = "+14072639482";
  $scope.playbackToken = "GAlTCRLL_____2R2cHlzNHd5ZXg3Z2M0OXdoaDY3aHdrbmxvY2FsaG9zdOfSuK3-btuBIw0X3zm36Uk=";
  return $scope.init = function() {
    $('#api').rdio($scope.playbackToken);
    return $('#api').bind('ready.rdio', function() {
      return $('#api').rdio().play('a171827');
    });
  };
}).controller('PlaylistControl', function($scope) {
  $scope.count = 5;
  $scope.tracks = [];
  return $scope.current_track = "";
}).controller('PlayerControl', function($scope) {
  $scope.track = "Timber";
  $scope.artist = "Pitbull, Ke$ha";
  $scope.album = "Global Warming: Meltdown (Deluxe Version)";
  $scope.icon = "";
  $scope.art = "";
  $scope.key = "t38018328";
  $scope.playing = false;
  $scope.position = 0;
  $scope.duration = 300;
  $scope.pause = function() {
    console.log("Pausing");
    return $scope.playing = false;
  };
  $scope.play = function() {
    $.rdio.play($scope.key);
    return $scope.playing = true;
  };
  return $('#api').bind('positionChanged.rdio', function(e, position) {
    return $scope.position = Math.floor(100 * position / duration);
  });
});
;'use strict';
/* Directives*/

angular.module('app.directives', ['app.services']).directive("rdioWebPlayer", function() {
  return {
    templateUrl: 'player.html'
  };
});
;'use strict';
/* Filters*/

angular.module('app.filters', []).filter('interpolate', [
  'version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }
]);
;'use strict';
/* Sevices*/

angular.module('app.services', []).factory('version', function() {
  return "0.1";
});
;
//# sourceMappingURL=app.js.map