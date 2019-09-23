const db = require('../data/dbConfig')

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find(id) {
    return db('students as s')
        .join('users as u', 's.user_id', '=', 'u.id')
        .where({ user_id: id})

}

function findById(id) {
    return null
}

function add() {
    return null
}

function update() {
    return null
}

function remove() {
    return null
}

