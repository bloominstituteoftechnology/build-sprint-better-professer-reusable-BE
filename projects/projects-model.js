const db = require('../data/dbConfig');

module.exports = {
	find,
	add,
	findById,
	update,
	remove
};

function find(id) {
	return db('students as s')
		.join('projects as p', 's.id', '=', 'p.student_id')
		.where({ student_id: id })
		.select('p.id', 'project_name', 'deadline', 'deadline_type', 'description');
}

function add(project) {
	return db('projects').insert(project).returning('id').then(([ id ]) => {
		return findById(id);
	});
}

function findById(id) {
	return db('projects').where({ id: id }).then(([ project ]) => {
		console.log(project);
		return project;
	});
}

function update(id, changes) {
	return db('projects').where({ id: id }).update(changes).then((count) => {
		return findById(id);
	});
}

function remove(id) {
	return db('projects').where('id', id).del();
}
