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
  // let count = 25
  // let arts = []
  // for (i=1; i < count; i++) {
  //   art = Artwork.get({id: i})
  //   arts.push(art)
  // }
  // this.someArt = arts
  //
  // let count_draw = 650
  // let drawings = []
  // for (i=600; i < count_draw; i++) {
  //   art = Artwork.get({id: i})
  //   drawings.push(art)
  // }
  // this.drawings = drawings
  //
  // this.sculptures = Artwork.findAllByAttribute('category', 'Sculptures')
  // function filterFunction (query) {
  //   console.log(query);
  // }

}



// if (arts.length === count) {
//   setTimeout(function() {
//   location.reload()
// }, 1000)
// }
