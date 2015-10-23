angular.module('magictrip')
.controller('AdminToursController', function($scope) {

  $scope.tours = allTours;

  $scope.newTour = {
    title: null,
    country: null,
    text: null,
    price: null,
    state: 'view'
  };

  $scope.backupTour = {
    title: null,
    country: null,
    text: null,
    price: null,
    state: null
  };

  $scope.addTour = function() {
    $scope.tours.push(angular.copy($scope.newTour));
    $scope.newTour.title = null;
    $scope.newTour.country = null;
    $scope.newTour.text = null;
    $scope.newTour.price = null;
  };

  $scope.removeTour = function(i) {
    $scope.tours.splice(i, 1);
  };

  $scope.editTour = function(tour) {
    $scope.backupTour = angular.copy(tour)
    tour.state = 'edit';
  };

  $scope.saveTour = function(tour) {
    tour.state = 'view';
  };

  $scope.cancelEditing = function(tour) {
    tour.title = $scope.backupTour.title;
    tour.country = $scope.backupTour.country;
    tour.text = $scope.backupTour.text;
    tour.price = $scope.backupTour.price;
    tour.state = 'view';
  };

});
