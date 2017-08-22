angular
.module('museoGram')
.factory('Review', [
  '$resource',
  reviewService
])

function reviewService ($resource) {
  return $resource('http://localhost:3000/reviews/:id', {}, {
    update: {
      method: 'PUT'
    }
})
}
