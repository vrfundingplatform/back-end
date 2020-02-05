const db = require('../../data/dbConfig');

module.exports = {
    findProjects,
    findProjectBy,
    findByProjectTitle,
    insertProject,
    updateProject,
    deleteProject,
}

function findProjects() {
    return db('projects');
}

function findProjectBy(where) {
    return db('projects').where(where);
}

function findByProjectTitle(title) {
    return findBy({ title }).first();
}

function insertProject(project) {
    console.log("projectModal",project)
    return db('projects')
    .insert(project, 'id')
    .then((id) => id);
    
}

function updateProject(id, changes) {
    return db('projects')
    .where({ id })
    .update(changes);
}

function deleteProject(id, remove) {
    return db('projects')
    .where({ id })
    .del(remove);
}
