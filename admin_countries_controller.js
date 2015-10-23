angular.module('magictrip')
.controller('AdminCountriesController', function($scope) {
  $scope.countries = allCountries;

  $scope.newCountry = {
    name: null,
    state: 'view'
  };

  $scope.backupCountry = {
    name: null
  };

  $scope.addCountry = function() {
    $scope.countries.push(angular.copy($scope.newCountry));
    $scope.newCountry.name = null;
  };

  $scope.removeCountry = function(i) {
    $scope.countries.splice(i, 1);
  };

  $scope.editCountry = function(country) {
    $scope.backupCountry = angular.copy(country)
    country.state = 'edit';
  };

  $scope.saveCountry = function(country) {
    country.state = 'view';
  };

  $scope.cancelEditing = function(country) {
    country.name = $scope.backupCountry.name;
    country.state = 'view';
  };

});
