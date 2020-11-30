exports.up = function (knex) {
  return knex.schema.createTable('products', table => {
    table.increments('id')
    table.string('name')
    table.string('description')
    table.string('image_url')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('products')
}
