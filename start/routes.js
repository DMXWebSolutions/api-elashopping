'use strict'

const Route = use('Route')


Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/departaments', 'StoreController.getDepartments')
Route.get('/stores/:departament', 'StoreController.getStoresByDepartaments')
Route.get('/Stores/:id', 'StoresController.getStoreById')


