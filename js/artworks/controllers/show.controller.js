angular
.module('museoGram')
.controller('ArtworkShowController', [
  '$stateParams',
  'Museum',
  'Artwork',
  ArtworkShowControllerFunction
])

function ArtworkShowControllerFunction ($stateParams, Museum, Artwork) {
  console.log($stateParams.museum_id);
  console.log($stateParams.id);
  this.museum = Museum.get({id: $stateParams.museum_id})
  this.index = $stateParams.id -1
}
