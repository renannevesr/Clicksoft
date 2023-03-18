import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Aluno from 'App/Models/Aluno'

export default class AlunosController {
    public async store({request, response}: HttpContextContract){

        const body = request.body()
        const aluno = await Aluno.create(body)
        response.status(201)

        return{
            message: 'Aluno criado com sucesso',
            data: aluno,
        }
    }
    public async  index() {
        const alunos = await Aluno.all()

        return{ data:alunos }
        }
    public async show({params}: HttpContextContract){
        const aluno = await Aluno.findOrFail(params.id)
        return{ 
            data: aluno
        }
    }
    public async destroy({params}: HttpContextContract){
        const aluno = await Aluno.findOrFail(params.id)
        await aluno.delete()
        return{ 
            message: "Aluno excluido com sucesso",
            data: aluno
        }

    }
    }
