angular
.module('museoGram')
.controller('MuseumShowController', [
  '$stateParams',
  'Museum',
  MuseumShowControllerFunction
])

function MuseumShowControllerFunction ($stateParams, Museum) {
  this.museum = Museum.get({id: $stateParams.id})
}
