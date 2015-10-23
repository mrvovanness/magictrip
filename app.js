angular.module('magictrip', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'tours.html',
    controller: 'ToursController'
  })
  .when('/admin/tours', {
    templateUrl: 'admin_tours.html',
    controller: 'AdminToursController'
  })
  .when('/admin/countries', {
    templateUrl: 'admin_countries.html',
    controller: 'AdminCountriesController'
  })
  .when('/tours/:slug', {
    templateUrl: 'tour.html',
    controller: 'TourController'
  });

  $locationProvider.html5Mode(true);
})

var allTours = [
  {
    slug: 'nemesis',
    title: 'The Lights of Nemesis',
    country: 'Oz',
    text: 'Wonderfull diving into deep sea',
    price: 100,
    state: 'view'
  },
  {
    slug: 'narnia',
    title: 'The Heights of Dumo',
    country: 'Narnia',
    text: 'The highest peaks under your boots',
    price: 200,
    state: 'view'
  }
];

var allCountries = [
 {name: 'Oz', state: 'view'},
 {name: 'Narnia', state: 'view'},
 {name: 'Fireland', state: 'view'}
];
