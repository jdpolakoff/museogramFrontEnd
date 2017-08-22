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
  console.log($stateParams);
  this.museum = Museum.get({id: $stateParams.museum_id})
  console.log(this.museum);
  this.artwork = Artwork.get({id: $stateParams.id})
  console.log(this.artwork);
  this.artwork.newReview = new Review()
  console.log(this.artwork.newReview);
  this.create = function () {
    this.artwork.newReview.$save(() => {
      $state.go('reviewIndex')
    })
  }
}
