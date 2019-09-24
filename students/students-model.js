const db = require('../data/dbConfig')

module.exports = {
    find,
    add,
    change,
    remove
}

function find(id) {
    return db('users as u')
        .join('students as s', 'u.id', '=', 's.user_id')
        .where({ user_id: id})
        .select('s.id', 's.student_name as student', 's.major')
        .then(([ stud ]) => {
            return stud
        })

}

function add(body) {
    return db('students').insert(body)
        .then(([stud]) => {
            return stud
        })
}

function change(id, info) {
    return db('students').where('id', id).update(info)
}

function remove(id) {
    return db('students').where(id).del()
}

