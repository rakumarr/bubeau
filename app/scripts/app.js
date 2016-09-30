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
  .config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('tab1', {
      url: '/tab1',
      controller: 'AboutCtrl',
      templateUrl: 'views/about.html'
      })
      .state('tab2', {
      url: '/tab2',
      controller: 'MainCtrl',
      templateUrl: 'views/main.html'
      })
      .state('tab3', {
        url: '/tab3',
        controller: 'AboutCtrl',
        templateUrl: 'views/about.html'
      });
  }]);
  // .config(['$mdThemingProvider', '$httpProvider', function ($mdThemingProvider, $httpProvider) {
  //   $mdThemingProvider.theme('default')
  //     .primaryPalette('blue-grey')
  //     .accentPalette('blue-grey')
  //   $mdThemingProvider.theme('light-theme')
  //     .primaryPalette('blue-grey')
  // }])
  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html',
  //       controller: 'MainCtrl',
  //       controllerAs: 'main'
  //     })
  //     .when('/about', {
  //       templateUrl: 'views/about.html',
  //       controller: 'AboutCtrl',
  //       controllerAs: 'about'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // });
