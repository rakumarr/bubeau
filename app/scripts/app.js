'use strict';

/**
 * @ngdoc overview
 * @name learnAngularApp
 * @description
 * # learnAngularApp
 *
 * Main module of the application.
 */
angular
  .module('learnAngularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ui.router'
  ])
  .constant('appConfig', {
    'prod': false,
    'testUrl': 'http://localhost:8085',
    'prodUrl': 'http://dashboard.int.yolphin.com',
    'api': '/api/v1/admin',
    'cliendID': 'd3d3565b-a1d4-4565-9a73-69b7856ce6a0'
  })
  // .config(['$mdThemingProvider', '$httpProvider', function ($mdThemingProvider, $httpProvider) {
  //   $mdThemingProvider.theme('default')
  //     .primaryPalette('blue-grey')
  //     .accentPalette('blue-grey')
  //   $mdThemingProvider.theme('light-theme')
  //     .primaryPalette('blue-grey')
  // }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
