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
    public async show({params,response}: HttpContextContract){
        const aluno = await Aluno.find(params.id)
        if (!aluno){
            return response.notFound ({ message: 'Aluno não existe.'})
        }
        return{ 
            data: aluno
        }
    }

    public async destroy({params,response}: HttpContextContract){
        const aluno = await Aluno.find(params.id)
        if (!aluno){
            return response.notFound ({ message: 'Aluno não existe.'})
        }
        await aluno.delete()
        return{ 
            message: "Aluno excluido com sucesso",
            data: aluno
        }

    }

    public async update({params, request,response}: HttpContextContract){
        const body = request.body()
        const aluno = await Aluno.find(params.id)
        if (!aluno){
            return response.notFound ({ message: 'Aluno não existe.'})
        }
        aluno.nome = body.nome
        aluno.email = body.email
        aluno.matricula = body.matricula
        aluno.data_nascimento = body.data_nascimento
        await aluno.save()

        return{
            message: "Aluno atualizado com sucesso!",
            data : aluno,
        }


    }


    }
