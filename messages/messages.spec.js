const server = require('../api/server');
const request = require('supertest');

const prepTestDB = require('../config/helpers');

beforeEach(prepTestDB);

describe('messages', () => {
	it('get /messages/students/:id', async () => {
		const res = await request(server).get('/messages/students/1');
		expect(res.status).toBe(200);

		expect(res.body[1]).toEqual({ message: 'asdasd', date: 'rowValue1', student_id: 1 });
	});

	it('post /messages', async () => {
		const res = await request(server)
			.post('/messages')
			.send({ message: 'asdasd', date: 'rowValue1', student_id: 1 });
		expect(res.status).toBe(201);
	});
});
