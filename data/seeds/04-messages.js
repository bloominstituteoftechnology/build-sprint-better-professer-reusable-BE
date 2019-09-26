exports.seed = function(knex) {
	return knex('messages').insert([
		{ message: 'How was the math test?', date: '11/1/2019', student_id: 1 },
		{ message: 'A glittering gem is not enough.', date: '1/21/2020', student_id: 1 },
		{ message: 'Tom got a small piece of pie.', date: '2/22/2020', student_id: 1 },
		{ message: 'Please wait outside of the house.', date: '2/12/2020', student_id: 1 }
	]);
};
