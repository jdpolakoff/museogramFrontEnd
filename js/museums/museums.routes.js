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
      .state('reviewIndex', {
        parent: 'artworkShow',
        url: '/reviews/',
        templateUrl: 'js/reviews/templates/reviews.index.html',
        controller: 'ArtworkShowController',
        controllerAs: 'vm'
      })
      .state('allArt', {
        parent: 'museumShow',
        url: '/museums/:id/allArt',
        templateUrl: 'js/museums/templates/museum.show.all.html',
        controller: 'MuseumShowController',
        controllerAs: 'vm'
      })
      .state('paintings', {
        parent: 'museumShow',
        url: '/museums/:id/paintings',
        templateUrl: 'js/museums/templates/museum.show.paintings.html',
        controller: 'MuseumShowController',
        controllerAs: 'vm'
      })

      // $urlRouterProvider.otherwise('/museums')
      }
