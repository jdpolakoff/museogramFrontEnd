angular
.module('museoGram')
.factory('Artwork', [
  '$resource',
  artworkService
])

function artworkService ($resource) {
  return $resource('http://localhost:3000/museums/:id', {}, {
    update: {
      method: 'PUT'
    }
})
}
