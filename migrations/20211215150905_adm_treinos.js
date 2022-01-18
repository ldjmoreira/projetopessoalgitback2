exports.up = function (knex, Promise) {
    return knex.schema.createTable('adm_treinos', table => {
        table.increments('id').primary()
        table.integer('tipo_treino').references('id').inTable('tipo_treinos').notNull()
        table.time('horario').notNull()
        table.integer('qtd').notNull()
        table.boolean('ativo').notNull().defaultTo(true)

      //  table.boolean('admin').notNull().defaultTo(false)
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('adm_treinos')
};