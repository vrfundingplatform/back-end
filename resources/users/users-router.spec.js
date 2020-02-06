const server = require('../../api/server');
const request = require('supertest');

describe('users', () => {
    it('get /', async () => {
        const res = await request(server).get('/users')
        expect(res.status).toBe(200);
        // fail test w/ toBe(204)
        console.log(res.body);
    });
});

