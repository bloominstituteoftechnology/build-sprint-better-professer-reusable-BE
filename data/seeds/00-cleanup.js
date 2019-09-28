const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
	// Deletes ALL existing entries
	return cleaner.clean(knex, {
		mode: 'truncate',
		ignoreTables: [ 'knex_migrations', 'knex_migrations_lock' ]
	});
};

// each time you knex seed:run, it will run this first and delete everything that exists in all of the tables
// except for the ones being ignored in line 7
// deletes all the data you add to it
