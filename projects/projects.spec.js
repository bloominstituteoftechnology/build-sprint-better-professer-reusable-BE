const server = require('../api/server');
const request = require('supertest');

const prepTestDB = require('../config/helpers');

beforeEach(prepTestDB);

describe('projects', () => {
	it('get /students/:id', async () => {
		const res = await request(server).get('/projects/students/2');
		expect(res.status).toBe(200);

		expect(res.body[1]).toEqual({
			'project id': 5,
			project_name: 'Jumping the Gun',
			deadline: '12/11/2019',
			deadline_type: 'Feedback',
			description: 'Start too early before preparations are ready'
		});
	});

	it('post /projects', async () => {
		const res = await request(server).post('/projects').send({
			project_name: 'Draw a Blank',
			deadline: '11/1/2019',
			deadline_type: 'Research paper',
			description: 'The sky is clear,the stars are twinkling.',
			student_id: 1
		});
		expect(res.status).toBe(201);
	});

	it('put /projects/:id', async () => {
		const res = await request(server).put('/projects/1').send({
			project_name: 'Draw a Blank',
			deadline: '11/1/2019',
			deadline_type: 'Research paper',
			description: 'The sky is clear,the stars are twinkling.',
			student_id: 1
		});
		expect(res.status).toBe(200);
		expect(res.body).toEqual({
			project_name: 'Draw a Blank',
			deadline: '11/1/2019',
			deadline_type: 'Research paper',
			id: 1,
			description: 'The sky is clear,the stars are twinkling.',
			student_id: 1
		});
	});

	it('delete /projects/:id', async () => {
		const res = await request(server).delete('/projects/1');
		expect(res.status).toBe(200);
	});
});
