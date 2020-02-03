const db = require('../data/dbConfig');

module.exports = {
    insert,
    find,
    findBy,
    findByUsername,
}

function insert(user) {
    return db('users')
    .insert(user, 'id')
    .then((id) => id);
}

function find() {
    return db('users');
}

function findBy(where) {
    return db('users').where(where);
}

function findByUsername(username) {
    return findBy({ username }).first();
}

