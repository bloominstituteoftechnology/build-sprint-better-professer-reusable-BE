const db = require('../data/dbConfig')

module.exports = {
    find,
    add,
    change,
    remove,
    findById
}

function find(id) {
    return db('users as u')
        .join('students as s', 'u.id', '=', 's.user_id')
        .where({ user_id: id})
        .select('s.id', 's.student_name as student', 's.major')
}

function add(body) {
    return db('students').insert(body)
        .then(([stud]) => {
            return findById(stud)
        })
}

function findById(id) {
	return db('students').where({ id: id }).then(([stud]) => {
		console.log(stud);
		return stud;
	});
}

function change(id, info) {
    return db('students').where('id', id).update(info)
    }
    // .then(count => (count > 0 ? this.get(id) : null))


function remove(id) {
    return db('students').where('id', id).del()
}

