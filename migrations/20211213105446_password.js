exports.up = function (knex, Promise) {
    return knex.schema.createTable('passwords', table => {
        table.increments('id').primary()
        table.integer('user_id').references('id').inTable('users').notNull()
        table.string('email').notNull()
        table.string('descricao').notNull()
        table.string('site').notNull()
        table.string('password').notNull()
        table.string('usuario')
        table.string('tel')
        table.date('datap')
      //  table.boolean('admin').notNull().defaultTo(false)
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('passwords')
};
