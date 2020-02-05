const server = require('../../api/server');
const request = require('supertest');

// Modal functions are very close to router functions so testing endpoints inherently tests modals as well

describe('projects', () => {
    it('get /', async () => {
        const res = await request(server).get('/projects')
        expect(res.status).toBe(200);
        // fail test w/ toBe(204)
    });
});