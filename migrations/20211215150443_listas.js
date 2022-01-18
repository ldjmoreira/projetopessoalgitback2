exports.up = function (knex, Promise) {
    return knex.schema.createTable('listas', table => {
        table.increments('id').primary()
        table.integer('cliente_smart').references('id').inTable('users').notNull()
        table.date('work_date').notNull()
        table.time('horario').notNull()
        table.string('tipotreino')
        table.string('is_shown').notNull().defaultTo(false)
      //  table.boolean('admin').notNull().defaultTo(false)
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('listas')
};
