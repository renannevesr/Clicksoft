import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Aluno from 'App/Models/Aluno'
import Sala from 'App/Models/Sala'
import Professor from 'App/Models/Professor'
export default class AlocacoesController {
  public async store({ response, request }: HttpContextContract) {
    const data = request.only(['idAluno', 'idSala', 'idProfessor'])
    const professor = await Professor.find(data.idProfessor)
    if (!professor) {
      return response.notFound({ message: 'Professor não existe.' })
    }

    const sala = await Sala.query()
      .where('id', data.idSala)
      .andWhere('professor_id', professor.id)
      .preload('alunos')
      .first()

    if (!sala) {
      return response.notFound({ message: 'Sala não encontrada.' })
    }

    const aluno = await Aluno.find(data.idAluno)
    if (!aluno) {
      return response.notFound({ message: 'Aluno não encontrado.' })
    }

    if (sala.alunos.find((a) => a.id === aluno.id)) {
      return response.badRequest({ message: 'O aluno já está alocado nesta sala.' })
    }

    if (sala.alunos.length >= sala.capacidade_alunos) {
      return response.badRequest({ message: 'A capacidade máxima da sala foi atingida.' })
    }

    await sala.related('alunos').attach([aluno.id])

    return response.status(201).send(sala)
  }
}
