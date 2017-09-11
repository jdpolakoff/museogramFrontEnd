angular
.module('museoGram')
.factory('Artwork', [
  '$resource',
  artworkService
])

function artworkService ($resource) {
  // Updated to use nested rails route
  return $resource(`${apiURL}/museums/:museum_id/artworks/:id`, {}, {
    update: {
      method: 'PUT'
    }
})
}
