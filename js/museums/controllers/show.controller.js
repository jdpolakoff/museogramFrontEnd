angular
.module('museoGram')
.controller('MuseumShowController', [
  '$stateParams',
  'Museum',
  'Artwork',
  MuseumShowControllerFunction
])

function MuseumShowControllerFunction ($stateParams, Museum, Artwork) {
  this.loaded = false
  this.loading = true

  this.museum = Museum.get({id: $stateParams.museum_id}, (museum) => {
    this.artworks = museum.artworks
    this.loading = false
    this.loaded = true
  })
  this.category = ''
  this.setCategory = setCategory
  function setCategory(input) {
    this.category = input
    this.limit = 25
    this.loaded = true
  }
  this.limit = 25
  this.increment = increment
  function increment (increment) {
    this.limit += increment
    if (this.limit > 75) {
      this.loaded = false
    }
  }
}
