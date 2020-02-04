const db = require('../../data/dbConfig');

module.exports = {
    find,
    findById,
    findByUsername,
    updateUser,
    deleteUser,
}

function find() {
    return db('users');
}

function findById(where) {
    return db('users')
    .where({ id})
    .first();
}

function findByUsername(username) {
    return findBy({ username })
    .first();
}

function updateUser(id, changes) {
    return db('users')
    .where({ id })
    .update((changes, '*'));
}

function deleteUser(users) {
    return db('users')
    .where({ id })
    .del((id) => id);
}
