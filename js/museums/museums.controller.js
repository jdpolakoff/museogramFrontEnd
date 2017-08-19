angular
.module('museoGram')
.controller('MuseumIndexController', [
  '$state',
  'Museum',
  MuseumIndexControllerFunction
])
.controller('MuseumShowController', [
  '$stateParams',
  'Museum',
  MuseumShowControllerFunction
])
