// indentation fixes
angular
.module('museoGram')
.factory('Review', [
  '$resource',
  reviewService
])

function reviewService ($resource) {
  return $resource(`${apiURL}/reviews/:id`, {}, {
    update: {
      method: 'PUT'
    }
  })
}
