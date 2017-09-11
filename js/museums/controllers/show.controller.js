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
  this.pageOffset = 0
  // instead of scattering `25` around this function,
  // let's assign it to a variable so if it needs to be altered in the future,
  // we'll have one place to update
  let pageIncrement = 25

  // Altering this request to use the `/artworks` resource gives us the
  // opportunity to `Paginate` the requested data
  this.fethchArtwork = () => Artwork.query({
    museum_id: $stateParams.museum_id,
    offset: this.pageOffset,
    limit: pageIncrement,
    sortType: 'DESC'
  }, (artworks) => {
    // make sure the artworks array exists
    this.artworks = this.artworks || []
    // push all new records onto our array
    this.artworks.push(...artworks)
    this.loading = false
    this.loaded = true
  })
  // wrapping the ajax request in a function for future use means we'll have
  // to call it explicitly this first time
  this.fethchArtwork()

  this.category = ''
  // with arrow functions we don't need to hoist
  // or worry about `this` being reassigned
  // this.setCategory = setCategory
  this.setCategory = (input) => {
    this.category = input
    this.limit = pageIncrement
    this.loaded = true
  }

  this.limit = pageIncrement

  // Now the increment function also fetches the next page of data

  // with arrow functions we don't need to hoist
  // or worry about `this` being reassigned
  // this.increment = increment
  this.increment = () => {
    this.pageOffset += pageIncrement
    this.limit += pageIncrement
    this.fethchArtwork()
    // if (this.limit > 75) {
    //   this.loaded = false
    // }
  }
}
