import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany, beforeSave } from '@ioc:Adonis/Lucid/Orm'
import Sala from './Sala'
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
  //@hasMany(() => Sala)
  //public salas: HasMany<typeof Sala>
  @manyToMany(() => Sala, {
    localKey: 'id',
    pivotForeignKey: 'aluno_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'sala_id',
    pivotTable: 'alocacoes',
  })
  public salas: ManyToMany<typeof Sala>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  /*@beforeSave()
  public static async incrementMatricula(aluno: Aluno) {
    if (!aluno.matricula) {
      const lastAluno = await Aluno.query().orderBy('matricula', 'desc').first()
      aluno.matricula = lastAluno ? lastAluno.matricula + 1 : 1
    }
  }*/
}
