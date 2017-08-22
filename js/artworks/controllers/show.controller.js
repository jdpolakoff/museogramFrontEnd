angular
.module('museoGram')
.controller('ArtworkShowController', [
  '$stateParams',
  'Museum',
  'Artwork',
  ArtworkShowControllerFunction
])

function ArtworkShowControllerFunction ($stateParams, Museum, Artwork) {
  this.artwork = Artwork.get({id: $stateParams.artwork_id})
}
