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
  return $scope.phone_number = "+14072639482";
}).controller('PlaylistControl', function($scope) {
  return $scope.count = 5;
}).controller('PlayerControl', function($scope) {
  $scope.track = "Timber";
  $scope.artist = "Pitbull, Ke$ha";
  $scope.album = "Global Warming: Meltdown (Deluxe Version)";
  $scope.playbackToken = "XYZ";
  $scope.icon = "";
  return $scope.art = "";
});
;'use strict';
/* Directives*/

angular.module('app.directives', ['app.services']).directive('appVersion', [
  'version', function(version) {
    return function(scope, elm, attrs) {
      return elm.text(version);
    };
  }
]).directive('rdioWebPlayer', ['version']);
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
  return "0.1".factory('');
});
;
//# sourceMappingURL=app.js.map