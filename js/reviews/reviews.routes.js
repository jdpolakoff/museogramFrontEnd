angular.module('museoGram')
.config([
  '$stateProvider',
  '$urlRouterProvider',
  config
])

function config ($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('reviewsNew', {
      url: '/reviews/new',
      templateUrl: 'js/reviews/new.html',
      controller: 'ReviewsNew',
      controllerAs: 'vm'
    })
    .state('reviewsEdit', {
      url: '/reviews/:id/edit',
      templateUrl: 'js/reviews/edit.html',
      controller: 'ReviewsEdit',
      controllerAs: 'vm'
    })
    // $urlRouterProvider.otherwise('/reviews')
  }
