const db = require('../data/dbConfig')

module.exports = {
    find,
    add,
    update,
    remove
};

function find(id) {
    return db("students as s")
        .join("projects as p", "s.id", "=", "p.student_id")
        .where({ student_id: id})
}

function add(project) {
    return db("projects")
    .insert(project)
    .then(([id]) => {
        return id })
}

function update(id, changes) {
    return db("projects")
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? this.get(id) : null))
}

function remove(id) {
    return db("projects")
    .where("id", id)
    .del();
}