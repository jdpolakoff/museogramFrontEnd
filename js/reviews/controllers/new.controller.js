angular
.module('museoGram')
.controller('ReviewsNewController', [
  '$stateParams',
  'Museum',
  'Artwork',
  'Review',
  ReviewsNewControllerFunction
])

function ReviewsNewControllerFunction ($stateParams, Museum, Artwork, Review) {
  // this.artwork = Artwork.get({id: $stateParams.artwork_id})
  this.newReview = new Review()
  this.newReview.artwork_id = $stateParams.artwork_id 
  this.create = function () {
    this.newReview.$save()
  }
}
