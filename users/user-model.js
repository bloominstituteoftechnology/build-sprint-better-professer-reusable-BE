const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById
};

async function add(user) {
	const [ id ] = await db('users').insert(user).returning("id");

	return findById(id);
}

function find() {
	return db('users');
}

function findBy(filter) {
	return db('users').where(filter).select('id', 'password');
}

function findById(id) {
	return db('users').where({ id }).first();
}
