exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        { id: 1, secret_code: 'banana', user_id: 10 },
        { id: 2, secret_code: 'apple', user_id: 11 },
        { id: 3, secret_code: 'feijoa', user_id: 12 }
      ])
    })
}
