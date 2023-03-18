import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sala from 'App/Models/Sala'
import Professor from 'App/Models/Professor'
/*
export default class SalasController {

  public async create({ request, response }: HttpContextContract) {
    const data = request.only(['numero', 'capacidade', 'disponibilidade'])

    const sala = await Sala.create(data)

    return response.status(201).json(sala)
  }
}*/

export default class SalaController {
    public async store({response, request }: HttpContextContract) {
      const data = request.only(['numero', 'capacidade_alunos', 'idProfessor'])
      const professor = await Professor.find(data.idProfessor)
      console.log(professor)
      if (!professor){
        return response.notFound({ message: 'Professor não existe.'})
      }
      const sala = new Sala()
      sala.numero = data.numero
      sala.capacidade_alunos = data.capacidade_alunos
      console.log(sala)
      await professor.related('salas').save(sala)
      return response.status(201).send(sala)
    }
  }