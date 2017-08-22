angular
.module('museoGram')
.factory('Review', [
  '$resource',
  reviewService
])

function reviewService ($resource) {
  return $resource('http://localhost:3000/museums/:museum_id/artworks/:artwork_id', {}, {
    update: {
      method: 'PUT'
    }
})
}
