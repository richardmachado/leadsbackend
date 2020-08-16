
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('leads').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('leads').insert([
        {
          id: 1,
          "name": 'Richard',
          "email": "richard@gmail.com",
          "message":"Pick me"
        },
 
      ]);
    });
};
