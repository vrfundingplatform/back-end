
exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
    users.increments('id')
        .notNullable()
        .unique()

    users.string('username', 255)
        .notNullable()
        .unique()

    users.string('email', 255)
        .notNullable()
        .unique()
    
    users.string('firstname', 255)
        .notNullable()

    users.string('lastname', 255)
        .notNullable()

        users.string('country', 255)
        .notNullable()

        users.string('state', 255)

        users.string('avatar', 255)

        users.text('bio', 255)

        users.boolean('bankacct')
        .notNullable()
        .defaultTo(false)

        users.boolean('creditcard')
        .notNullable()
        .defaultTo(false)

        users.boolean('age')
        .notNullable()
        .defaultTo(false)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
