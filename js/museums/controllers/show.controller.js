angular
.module('museoGram')
.controller('MuseumShowController', [
  '$stateParams',
  'Museum',
  'Artwork',
  MuseumShowControllerFunction
])

function MuseumShowControllerFunction ($stateParams, Museum, Artwork) {
  this.museum = Museum.get({id: $stateParams.museum_id})
}
