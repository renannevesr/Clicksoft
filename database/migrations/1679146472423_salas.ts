import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'salas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('numero_sala').notNullable().unique()
      table.integer('capacidade_alunos').notNullable()
      table.boolean('disponibilidade').notNullable()
      table.integer('professor_id').unsigned().references('id').inTable('professores').onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
