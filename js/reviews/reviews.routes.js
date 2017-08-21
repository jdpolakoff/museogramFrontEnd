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
      controller: 'WdiNew',
      controllerAs: 'vm'
    })
    .state('reviewsEdit', {
      url: '/reviews/:id/edit',
      templateUrl: 'js/reviews/edit.html',
      controller: 'WdiEdit',
      controllerAs: 'vm'
    })
    $urlRouterProvider.otherwise('/reviews')
  }
