exports.up = function (knex, Promise) {
    return knex.schema.createTable('working_hours', table => {
        table.increments('id').primary()
        table.integer('user_id').references('id').inTable('users').notNull()
        table.date('work_date').notNull()
        table.string('time1').notNull()
        table.integer('tipotreino').notNull()
        table.boolean('is_shown').notNull().defaultTo(false)

      //  table.boolean('admin').notNull().defaultTo(false)
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('working_hours')
};