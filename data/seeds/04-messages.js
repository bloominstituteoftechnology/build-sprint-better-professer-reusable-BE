exports.seed = function(knex) {
	return knex('messages').insert([
		{ message: 'asdasbsd', date: 'rowValue1', student_id: 1 },
		{ message: 'asdasd', date: 'rowValue1', student_id: 1 },
		{ message: 'paosd', date: 'rowValue1', student_id: 1 },
		{ message: 'po', date: 'rowValue1', student_id: 1 }
	]);
};
