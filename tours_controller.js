angular.module('magictrip')
.controller("ToursController", function($scope) {
  $scope.tours = allTours;
  $scope.countries = allCountries;
});
