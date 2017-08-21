angular
.module('museoGram')
.controller('ArtworkShowController', [
  '$stateParams',
  'Museum',
  'Artwork',
  ArtworkShowControllerFunction
])

function ArtworkShowControllerFunction ($stateParams, Museum, Artwork) {
  this.museum = Museum.get({id: $stateParams.museum_id})
  this.index = $stateParams.id - 1
}
