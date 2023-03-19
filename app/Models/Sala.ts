import { DateTime } from 'luxon'
import {
  BaseModel,
  column,
  belongsTo,
  BelongsTo,
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Professor from './Professor'
import Aluno from './Aluno'

export default class Sala extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public numero: number
  @column()
  public capacidade_alunos: number
  @column()
  public disponibilidade: boolean
  @column()
  public professorId: number
  @belongsTo(() => Professor)
  public professor: BelongsTo<typeof Professor>

  @manyToMany(() => Aluno, {
    pivotTable: 'alocacoes',
    pivotTimestamps: true,
  })
  public alunos: ManyToMany<typeof Aluno>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
