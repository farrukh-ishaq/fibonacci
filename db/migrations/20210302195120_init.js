
exports.up = function (knex) {
  return knex.schema.createTable('fibonacci', table => {
    table.increments('id')
    table.string('email', 255).notNullable().unique()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('fibonacci')
}
