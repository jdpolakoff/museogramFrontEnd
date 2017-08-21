angular
.module('museoGram')
.config([
'$stateProvider',
'$locationProvider',
'$urlRouterProvider',
  RouterFunction
  ])

function RouterFunction ($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider
      .state('museumIndex', {
        url: '/museums',
        templateUrl: 'js/museums/templates/museum.index.html',
        controller: 'MuseumIndexController',
        controllerAs: 'vm'
      })
      .state('museumShow', {
        url: '/museums/:id',
        templateUrl: 'js/museums/templates/museum.show.html',
        controller: 'MuseumShowController',
        controllerAs: 'vm'
      })
      .state('artworkShow', {
        // parent: 'museumShow',
        url: '/museums/:museum_id/artworks/:id',
        templateUrl: 'js/museums/templates/museums.artwork.show.html',
        controller: 'ArtworkShowController',
        controllerAs: 'vm'
      })

      // $urlRouterProvider.otherwise('/museums')
      }
