exports.up = function (knex, Promise) {
    return knex.schema.createTable('tipo_treinos', table => {
        table.increments('id').primary()
        table.string('nome').notNull()
        table.integer('cod_treino').notNull()

      //  table.boolean('admin').notNull().defaultTo(false)
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('tipo_treinos')
};