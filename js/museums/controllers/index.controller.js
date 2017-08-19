angular
.module('museoGram')
.controller('MuseumIndexController', [
  '$state',
  'Museum',
  MuseumIndexControllerFunction
])

function MuseumIndexControllerFunction ($state, Museum) {
  this.museums = Museum.query()
}
