angular
.module('museoGram')
.controller('ArtworkShowController', [
  '$stateParams',
  'Museum',
  'Artwork',
  ArtworkShowControllerFunction
])

function ArtworkShowControllerFunction ($stateParams, Museum, Artwork) {
  // Updated to use nested rails route
  this.artwork = Artwork.get({
    museum_id: $stateParams.museum_id,
    id: $stateParams.artwork_id
  })
}
