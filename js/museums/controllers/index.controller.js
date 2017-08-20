angular
.module('museoGram')
.controller('MuseumIndexController', [
  'Museum',
  MuseumIndexControllerFunction
])

function MuseumIndexControllerFunction (Museum) {
  this.museums = Museum.query()

}
