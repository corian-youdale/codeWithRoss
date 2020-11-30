exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, name: 'banana', email: 'example@email.com' },
        { id: 2, name: 'apple', email: 'example@email.com' },
        { id: 3, name: 'feijoa', email: 'example@email.com' }
      ])
    })
}
