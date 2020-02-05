module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: { filename: './data/vrfund.db3' },
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations',
    },
    pool: {
      afterCreate:(conn, done) => {
          conn.run('PRAGMA foreign_keys = ON', done);
      }
  },
    seeds: { directory: './data/seeds' },
  },

  production: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: { filename: './data/vrfund.db3' },
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations',
    },
    pool: {
      afterCreate:(conn, done) => {
          conn.run('PRAGMA foreign_keys = ON', done);
      }
  },
    seeds: { directory: './data/seeds' },
  },

  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: { filename: './data/test.db3' },
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations',
    },
    pool: {
      afterCreate:(conn, done) => {
          conn.run('PRAGMA foreign_keys = ON', done);
      }
  },
    seeds: { directory: './data/seeds' },
  },
};




