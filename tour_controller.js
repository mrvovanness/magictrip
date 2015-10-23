angular.module('magictrip')
.controller('TourController', function($scope, $routeParams) {
  angular.forEach(allTours, function(tour) {
    if ($routeParams.slug == tour.slug)
      $scope.tour = tour; 
  })
});
