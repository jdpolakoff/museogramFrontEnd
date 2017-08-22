angular
.module('museoGram', [
  'ui.router',
  'ngResource'
])
.controller('ReviewsNewController', [
  '$state',
  'Museum',
  'Artwork',
  'Review',
  ReviewsNewControllerFunction
])

function ReviewsNewControllerFunction ($state, Museum, Artwork, Review) {

  this.newReview = new Review()
  this.create = function () {
    this.newReview.$save(() => {
      $state.go('reviewIndex', {}, { reload: true })
    })
  }
}
