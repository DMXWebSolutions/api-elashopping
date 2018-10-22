'use strict'

const Route = use('Route')


Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')
Route.get('/departaments', 'StoreController.getDepartments')
Route.get('/departaments/:id', 'StoreController.getStoresByDepartaments')
Route.get('/stores/:id', 'StoreController.getStoresByDepartaments')
Route.post('/birthday', 'BirthdayController.store')
Route.get('/subscribers', 'BirthdayController.getSubscribersList')


