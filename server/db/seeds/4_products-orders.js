exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('products-orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('products-orders').insert([
        { product_id: 1, order_id: 'banana', quantity: 2 },
        { product_id: 2, order_id: 'apple', quantity: 3 },
        { product_idid: 3, order_id: 'feijoa', quantity: 4 }
      ])
    })
}
