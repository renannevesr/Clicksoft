import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sala from 'App/Models/Sala'
import Professor from 'App/Models/Professor'

export default class SalaController {
  public async store({ response, request }: HttpContextContract) {
    const data = request.body()
    const professor = await Professor.find(data.idProfessor)
    if (!professor) {
      return response.notFound({ message: 'Professor não existe.' })
    }
    const sala = new Sala()
    sala.numero = data.numero
    sala.capacidade_alunos = data.capacidade_alunos
    sala.disponibilidade = data.disponibilidade
    await professor.related('salas').save(sala)
    return response.status(201).send(sala)
  }

  public async index({ response }: HttpContextContract) {
    const salas = await Sala.query().preload('professor')
    return response.status(200).send(salas)
  }

  public async update({ response, request, params }: HttpContextContract) {
    const { id } = params
    const sala = await Sala.find(id)
    if (!sala) {
      return response.notFound({ message: 'Sala não encontrada.' })
    }
    const data = request.only(['numero', 'capacidade_alunos'])
    sala.numero = data.numero
    sala.capacidade_alunos = data.capacidade_alunos
    await sala.save()
    return response.status(200).send({ message: 'Sala atualizada com sucesso.' })
  }

  public async destroy({ response, params }: HttpContextContract) {
    const { id } = params
    const sala = await Sala.find(id)
    if (!sala) {
      return response.notFound({ message: 'Sala não encontrada.' })
    }
    await sala.delete()
    return response.status(200).send({ message: 'Sala deletada com sucesso.' })
  }
}
