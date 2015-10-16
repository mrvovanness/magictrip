var app = angular.module('magictrip', []);

app.controller('ToursController', function($scope) {

  $scope.tours = [
    {
      title: 'The Lights of Nemesis',
      country: 'Oz',
      text: 'Wonderfull diving into deep sea',
      price: 100,
      state: 'view'
    },
    {
      title: 'The Heights of Dumo',
      country: 'Narnia',
      text: 'The highest peaks under your boots',
      price: 200,
      state: 'view'
    }
  ];

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
  }

  $scope.addTour = function() {
    $scope.tours.push(angular.copy($scope.newTour));
  };

  $scope.removeTour = function(tour) {
    var i = $scope.tours.indexOf(tour)
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
