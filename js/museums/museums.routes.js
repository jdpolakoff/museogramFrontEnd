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
        url: '/museums/:museum_id',
        templateUrl: 'js/museums/templates/museum.show.html',
        controller: 'MuseumShowController',
        controllerAs: 'vm'

      })
      .state('artworkShow', {
        parent: 'museumShow',
        url: '/artworks/:artwork_id',
        templateUrl: 'js/artworks/templates/artwork.show.html',
        controller: 'ArtworkShowController',
        controllerAs: 'vm'
      })
      .state('reviewIndex', {
        parent: 'artworkShow',
        url: '/reviews',
        templateUrl: 'js/reviews/templates/reviews.index.html',
        controller: 'ArtworkShowController',
        controllerAs: 'vm'
      })
      .state('reviewsNew', {
        parent: 'artworkShow',
        url: '/reviews/new',
        templateUrl: 'js/reviews/templates/reviews.new.html',
        controller: 'ReviewsNewController',
        controllerAs: 'vm'
      })
      // .state('allArt', {
      //   parent: 'museumShow',
      //   url: '/museums/:id/allArt',
      //   templateUrl: 'js/museums/templates/museum.show.all.html',
      //   controller: 'MuseumShowController',
      //   controllerAs: 'vm'
      // })
      // .state('paintings', {
      //   parent: 'museumShow',
      //   url: '/museums/:id/paintings',
      //   templateUrl: 'js/museums/templates/museum.show.paintings.html',
      //   controller: 'MuseumShowController',
      //   controllerAs: 'vm'
      // })

      $urlRouterProvider.otherwise('/museums')
      }
