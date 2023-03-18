import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Professor from 'App/Models/Professor'

export default class ProfessoresController {
     public async store({request, response}: HttpContextContract){

        const body = request.body()
        console.log(body)
        /*const professor = await Professor.create(body)*/
        const data = request.only(['nome', 'email', 'data_nascimento'])
        console.log(data)
        const professor = await Professor.create(data)
        response.status(201)

        return{
            message: 'Professor criado com sucesso',
            data: professor,
        }
    }
    public async  index() {
        const professores = await Professor.all()

        return{ data:professores }
        }
    public async show({params}: HttpContextContract){
        const professor = await Professor.findOrFail(params.id)
        return{ 
            data: professor
        }
    }

    public async destroy({params}: HttpContextContract){
        const professor = await Professor.findOrFail(params.id)
        await professor.delete()
        return{ 
            message: "Professor excluido com sucesso",
            data: professor
        }

    }

    public async update({params, request}: HttpContextContract){
        const body = request.body()
        const professor = await Professor.findOrFail(params.id)
        professor.nome = body.nome
        professor.email = body.email
        professor.matricula = body.matricula
        professor.data_nascimento = body.data_nascimento
        await professor.save()

        return{
            message: "Professor atualizado com sucesso!",
            data : professor,
        }


    }


    


}
