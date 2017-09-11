// indentation fixes
angular
.module('museoGram')
.factory('Museum', [
  '$resource',
  museumService
])

function museumService ($resource) {
  return $resource(`${apiURL}/museums/:id`, {}, {
    update: {
      method: 'PUT'
    }
  })
}
