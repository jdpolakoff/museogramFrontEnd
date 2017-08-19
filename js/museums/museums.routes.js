angular
.module('museoGram')
.config([
'$stateProvider',
'$locationProvider',
'$urlRouterProvider',
  RouterFunction
  ])

function RouterFunction ($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true)
    $stateProvider
      .state('museumIndex', {
        url: '/museums',
        templateUrl: 'js/museums/museums.index.html',
        controller: 'MuseumIndexController',
        controllerAs: 'vm'
      })
      .state('museumShow', {
        url: '/museums/:id',
        templateUrl: 'js/museums/museums.show.html',
        controller: 'MuseumShowController',
        controllerAs: 'vm'
      })
      $urlRouterProvider.otherwise('/museums')
      }
