/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
  Route.resource('/alunos', 'AlunosController').apiOnly()
  Route.resource('/alocacoes', 'AlocacoesController').apiOnly()
  Route.resource('/professores', 'ProfessoresController').apiOnly()
  Route.resource('/salas', 'SalasController').apiOnly()
  Route.get('/alocacoes/:id/salas', 'AlocacoesController.indexSalas')
  Route.delete(
    '/alocacoes/:idAluno/salas/:idSala/professores/:idProfessor',
    'AlocacoesController.remove'
  )
  Route.get('/alocacoes/:idSala/alunos', 'AlocacoesController.indexAlunos')
}).prefix('/api')
