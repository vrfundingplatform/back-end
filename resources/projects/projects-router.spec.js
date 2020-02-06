const server = require('../../api/server');
const request = require('supertest');
const db = require('../../data/dbConfig');

// Modal functions are very close to router functions so testing endpoints inherently tests modals as well

beforeEach(() => {
    return db.migrate.rollback()
        .then(() => db.migrate.latest())
        .then(() => db.seed.run ())
})

describe('projects', () => {
    it('get /', async () => {
        const res = await request(server).get('/projects')
        expect(res.status).toBe(200);
        // fail test w/ toBe(204)
    });
});