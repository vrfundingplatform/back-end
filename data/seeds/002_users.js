
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1, 
          username: 'bslayer',
          password: 'test1',
          email: 'slayer@gmail.com',
          firstname: 'Buffy',
          lastname: 'Summers',
          country: 'United States',
          state: 'California',
          avatar: '',
          bio: 'Seeks out and destroy vampires!',
          bankacct: (true),
          age: (true),
        },
      ]);
    });
};