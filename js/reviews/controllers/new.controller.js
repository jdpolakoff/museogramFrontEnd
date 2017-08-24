angular
.module('museoGram')
.controller('ReviewsNewController', [
  '$stateParams',
  '$state',
  'Museum',
  'Artwork',
  'Review',
  ReviewsNewControllerFunction
])

function ReviewsNewControllerFunction ($stateParams, $state, Museum, Artwork, Review) {
  // this.artwork = Artwork.get({id: $stateParams.artwork_id})
  this.newReview = new Review()
  this.newReview.artwork_id = $stateParams.artwork_id
  this.create = function () {
    this.newReview.$save(() => {
      $state.go('artworkShow', {}, {reload: true})
    }

    )
  }
}
