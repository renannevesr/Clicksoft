import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Aluno from 'App/Models/Aluno'
import Sala from 'App/Models/Sala'
import Professor from 'App/Models/Professor'

export default class Alocacao extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public dataHora: DateTime

  @belongsTo(() => Aluno)
  public aluno: BelongsTo<typeof Aluno>

  @belongsTo(() => Sala)
  public sala: BelongsTo<typeof Sala>
  
  @belongsTo(() => Professor)
  public professor: BelongsTo<typeof Professor>
}
