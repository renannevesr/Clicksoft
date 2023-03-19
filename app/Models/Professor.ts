import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, beforeSave } from '@ioc:Adonis/Lucid/Orm'
import Sala from './Sala'
export default class Professor extends BaseModel {
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
  @hasMany(() => Sala)
  public salas: HasMany<typeof Sala>
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  /*
  @beforeSave()
  public static async incrementMatricula(professor: Professor) {
    if (!professor.matricula) {
      const lastProfessor = await Professor.query().orderBy('matricula', 'desc').first()
      professor.matricula = lastProfessor ? lastProfessor.matricula + 1 : 1
    }
  }*/

  static get table() {
    return 'professores'
  }
}
