'use strict'

const Route = use('Route')


Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')
Route.get('/departaments', 'StoreController.getDepartments')
Route.get('/departaments/:id', 'StoreController.getStoresByDepartaments')
Route.get('/stores/:id', 'StoreController.getStoresById')
Route.get('/stores/piso/:piso', 'StoreController.getStoresByFloor')
Route.post('/birthday', 'BirthdayController.store')
Route.get('/subscribers', 'BirthdayController.getSubscribersList')
Route.get('/files/events', 'FileController.getImagesByYear')
Route.post('/mail', 'MailController.sendMail')
Route.post('/test', ({response}) => response.json({response: 'email enviado'}))


