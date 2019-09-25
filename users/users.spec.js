const server = require('../api/server');
const request = require('supertest');
const bcrypt = require('bcryptjs');

const prepTestDB = require('../config/helpers');

beforeEach(prepTestDB);

describe('users', () => {
	it('post /users/register', async () => {
		const res = await request(server).post('/users/register').send({
			username: 'LabdaSchool',
			password: bcrypt.hashSync('prof', 1),
			first_name: 'Indiana',
			last_name: 'Jones'
		});
		expect(res.status).toBe(201);
	});

	it('post /users/login', async () => {
		const res = await request(server).post('/users/login').send({
			username: 'prof',
			password: 'prof'
		});
		expect(res.status).toBe(200);
	});
});
