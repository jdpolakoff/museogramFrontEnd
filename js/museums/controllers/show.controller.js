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
  let count = 25
  let arts = []
  for (i=1; i < count; i++) {
    art = Artwork.get({id: i})
    arts.push(art)
  }
  this.someArt = arts
}



// if (arts.length === count) {
//   setTimeout(function() {
//   location.reload()
// }, 1000)
// }
