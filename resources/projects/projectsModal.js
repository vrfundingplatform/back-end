const db = require('../../data/dbConfig');

module.exports = {
    findProjects,
    findProjectBy,
    findByProjectTitle,
    updateProject,
    deleteProject,
}

function findProjects() {
    return db('projects');
}

function findProjectBy(where) {
    return db('projects').where(where);
}

function findByProjectTitle(username) {
    return findBy({ username }).first();
}

function updateProject(user) {
    return db('projects')
    .where(project, 'id')
    .update((id) => id);
}

function deleteProject(user) {
    return db('projects')
    .where(project, 'id')
    .del((id) => id);
}
