module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/restaurants',
      handler: 'Restaurant.find',
      config: { policies: [] }
    },
    {
      method: 'GET',
      path: '/restaurants/:id',
      handler: 'Restaurant.findOne',
      config: { policies: [] }
    },
    {
      method: 'POST',
      path: '/restaurants',
      handler: 'Restaurant.create',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/restaurants/:id',
      handler: 'Restaurant.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/restaurants/:id',
      handler: 'Restaurant.delete',
      config: { policies: [] }
    }
  ]
}