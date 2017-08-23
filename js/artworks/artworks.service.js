angular
.module('museoGram')
.factory('Artwork', [
  '$resource',
  artworkService
])

function artworkService ($resource) {
  return $resource(`${apiURL}/artworks/:id`, {}, {
    update: {
      method: 'PUT'
    }
})
}
