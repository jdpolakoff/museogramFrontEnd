// indentation fixes

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
      url: '/museums/:museum_id/artworks/:artwork_id',
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
    .state('navbar.show', {
      url: '/artworks/:artwork_id',
      views: {
        '@': {
          templateUrl: 'app/photos/show/index.html',
          controller: 'PhotoController'
        }
      },
      hideNavbar: true
    })

  $urlRouterProvider.otherwise('/museums')
}
