
exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
    users.increments('id')
        .notNullable()
        .unique()

    users.string('username', 255)
        .notNullable()
        .unique()

    users.string('password', 255)
        .notNullable()

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

        users.boolean('age')
        .notNullable()
        .defaultTo(false)
  })

  return knex.schema.createTable('projects', projects => {
    projects.increments('id')
        .notNullable()
        .unique()

    projects.binary('users_projectid', 255)
        .notNullable()
        .unique()

    projects.string('category', 255)
        .notNullable()

    projects.string('subcategory', 255)
    
    projects.string('status', 255)
        .notNullable()

    projects.string('title', 255)
        .notNullable()

        users.string('startDate', 255)
        .notNullable()

        users.string('endDate', 255)
        .notNullable()

        users.string('cta', 255)

        users.text('desc', 255)

        users.integer('goal')
        .notNullable()

        users.string('PrimaryPic')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects')
    return knex.schema.dropTableIfExists('users')
};
