function museumService ($resource) {
  return $resource('http://localhost:3000/museums/:id', {}, {
    update: {
      method: 'PUT'
    }
})
}
