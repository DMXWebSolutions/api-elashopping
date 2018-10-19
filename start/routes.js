'use strict'

const Route = use('Route')


Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')
Route.get('/departaments', 'StoreController.getDepartments')
Route.get('/stores/:departament', 'StoreController.getStoresByDepartaments')
Route.get('/Stores/:id', 'StoresController.getStoreById')
Route.post('/birthday', 'BirthdayController.store')
Route.get('/subscribers', 'BirthdayController.getSubscribersList')


