const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById
};
// an obj has to have a key and a value so this is really {add:add}, {find:find}, etc.

async function add(user) {
	const [ id ] = await db('users').insert(user).returning('id');

	return findById(id);
}

function find() {
	return db('users');
}

function findBy(filter) {
	return db('users').where(filter).select('id', 'password');
	// filter and then pass {username} obj in router or w/e you are looking for
	// {username} = {username:username} key:value pair
}

function findById(id) {
	return db('users').where({ id }).first();
}
