
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
  
        users.string('state', 255)
  
        users.string('avatar', 255)
  
        users.text('bio', 255)
  
        users.boolean('bankacct')
          .defaultTo(false)
  
        users.boolean('age')
          .defaultTo(false)
    })
  
    .createTable('projects', projects => {
        projects.increments('id')
          .notNullable()
          .unique()
  
        projects.integer('users_projectid')
          .notNullable()
          .unsigned()
          .references('id')
          .inTable('users')
          
        projects.string('category', 255)
          .notNullable()
  
        projects.string('subcategory', 255)
      
        projects.string('status', 255)
          .notNullable()
  
        projects.string('title', 255)
          .notNullable()
          
        projects.string('startDate', 255)
  
        projects.string('endDate', 255)
  
        projects.string('cta', 255)
  
        projects.text('desc', 255)
  
        projects.integer('goal')
        .notNullable()
  
        projects.string('primaryPic')
    })
  };

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects')
    .dropTableIfExists('users')
};
