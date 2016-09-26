angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) { })

.controller('HomeCtrl', function ($scope) { })
.controller('SearchCtrl', function ($scope) { })

.controller('BrowseCtrl', function($scope, Browses) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.browse = Browses.all();
  $scope.remove = function(browse) {
    Browses.remove(browse);
  };
})

.controller('BrowseDetailCtrl', function($scope, $stateParams, Browses) {
  $scope.browse = Browses.get($stateParams.browseId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
