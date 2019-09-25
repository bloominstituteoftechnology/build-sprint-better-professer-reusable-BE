const server = require('../api/server');
const request = require('supertest');

beforeEach(() => db.seed.run())

describe('owners', () => {
    it("post /", async() => {
    const 
    })
	it('get /', async () => {
        const res = await request(server).get('/owners')
        expect(res.status).toBe(200) // dont forget to add in test scripts in pacakge.json then run test
    expect(res.body).toEqual([]) // body is equal to an empty array
    console.log(res.body)
    // you can add 'filename: memory' to filename in testing
    });
});
