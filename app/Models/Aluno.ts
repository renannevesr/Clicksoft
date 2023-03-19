import { DateTime } from 'luxon'
import { BaseModel, column, beforeSave } from '@ioc:Adonis/Lucid/Orm'

export default class Aluno extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string
  @column()
  public email: string
  @column()
  public matricula: number
  @column.dateTime()
  public data_nascimento: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  @beforeSave()
  public static async incrementMatricula(aluno: Aluno) {
    if (!aluno.matricula) {
      const lastAluno = await Aluno.query().orderBy('matricula', 'desc').first()
      aluno.matricula = lastAluno ? lastAluno.matricula + 1 : 1
    }
  }
}
