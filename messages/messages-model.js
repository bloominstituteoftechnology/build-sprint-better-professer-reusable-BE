const db = require('../data/dbConfig');

module.exports = {
	find,
	add,
	findById
};

function find(id) {
	return db('students as s')
		.join('messages as m', 's.id', '=', 'm.student_id')
		.where({ student_id: id })
		.select('message', 'date', 'student_id');
}

function add(message) {
	return db('messages').insert(message).returning('id').then(([ id ]) => {
		return findById(id);
	});
}

function findById(id) {
	return db('messages').where({ id });
}
