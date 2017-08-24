angular
.module('museoGram')
.controller('MuseumShowController', [
  '$stateParams',
  'Museum',
  'Artwork',
  MuseumShowControllerFunction
])

function MuseumShowControllerFunction ($stateParams, Museum, Artwork) {
  this.museum = Museum.get({id: $stateParams.museum_id}, (museum) => {
    console.log(museum);
    this.artworks = museum.artworks
  })
  this.category = ''
  this.setCategory = setCategory
  function setCategory(input) {
    console.log(this.artworks);
    this.category = input
    console.log(this.category);
  }
}
