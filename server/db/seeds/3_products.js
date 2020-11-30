exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        { id: 1, name: 'Hammer', description: 'A Hammer', image_url: 'image.image1' },
        { id: 2, name: 'Hose', description: 'A Hose', image_url: 'image.image2' },
        { id: 3, name: 'Wheel Barrow', description: 'A Wheel Barrow', image_url: 'image.image3' }
      ])
    })
}
