const db = require('../data/dbConfig');

module.exports = {
	find,
	add,
	change,
	remove,
	findById
};

function find(id) {
	return db('users as u')
		.join('students as s', 'u.id', '=', 's.user_id')
		.where({ user_id: id })
		.select('s.id', 's.student_name', 's.major');
}

function add(body) {
	return db('students').insert(body).returning('id').then(([ stud ]) => {
		return findById(stud);
	});
}

function findById(id) {
	return db('students').where({ id: id }).then(([ stud ]) => {
		return stud;
	});
}

function change(id, info) {
	return db('students').where('id', id).update(info).then((student) => {
		return student;
	});
}

function remove(id) {
	return db('students').where('id', id).del();
}
