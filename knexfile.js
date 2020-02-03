module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: { filename: './data/vrfund.db3' },
    useNullAsDefault: true,
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
