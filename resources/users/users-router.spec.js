const server = require('../../api/server');
const request = require('supertest');
const db = require('../../data/dbConfig');
// set object as a variable const userProfile = 

beforeEach(() => {
    return db.migrate.rollback()
        .then(() => db.migrate.latest())
        .then(() => db.seed.run ())
})

describe('users', () => {
    it('get /', async () => {
        const res = await request(server).get('/users')
        expect(res.status).toBe(200);
        // fail test w/ toBe(204)
        console.log(res.body);
    });
});

describe('Register User', () => {
    it('POST /auth/register', async () => {
        const res = await request(server)
            .post('/auth/register')
            .send({username: 'fred', password: 'test1', email: 'fred@gmail.com', firstname: 'Buffy3', lastname: 'Summers3', country: 'United States', state: 'California', avatar: '', bio: 'Seeks out and destroy vampires!', bankacct: 'true', age: 'true'})
        expect(res.status).toBe(201)
        expect(res.body).toHaveProperty('id')
        expect(res.type).toBe('application/json')
        expect(res.body).toMatchObject({message: 'User registered'})
    })
})

describe('Login User', () => {
    it('POST /auth/login', async () => {
        const res = await request(server)
            .post('/auth/register')
            .send({username: 'fred', password: 'test1', email: 'fred@gmail.com', firstname: 'Buffy3', lastname: 'Summers3', country: 'United States', state: 'California', avatar: '', bio: 'Seeks out and destroy vampires!', bankacct: 'true', age: 'true'})
        const login = await request(server)
            .post('/auth/login')
            .send({username: 'fred', password: 'test1'})
            console.log(login.body)
        expect(login.status).toBe(200)
        expect(login.type).toBe('application/json')
        expect(login.body).toMatchObject({message: 'Welcome back! fred'})
        expect(login.body).toHaveProperty('token')
    })
})

describe('Edit User', () => {
    it('PUT /users/1', async () => {
        const res = await request(server)
            .post('/auth/register')
            .send({username: 'fred', password: 'test1', email: 'fred@gmail.com', firstname: 'Buffy3', lastname: 'Summers3', country: 'United States', state: 'California', avatar: '', bio: 'Seeks out and destroy vampires!', bankacct: 'true', age: 'true'})
            console.log(res.body)
            const put = await request(server)
            .put('/users/2')
            .send({username: 'barney', password: 'test1'})
            console.log(put.body)
        expect(put.status).toBe(200)
        expect(put.type).toBe('application/json')
        expect(put.body).toHaveProperty('updated')
    })
})

describe('Delete User', () => {
    it('DELETE /users/1', async () => {
        const res = await request(server)
            .post('/auth/register')
            .send({username: 'fred', password: 'test1', email: 'fred@gmail.com', firstname: 'Buffy3', lastname: 'Summers3', country: 'United States', state: 'California', avatar: '', bio: 'Seeks out and destroy vampires!', bankacct: 'true', age: 'true'})
            console.log(res.body)
        const put = await request(server)
            .delete('/users/2')
            console.log(put.body)
        expect(put.status).toBe(201)
        expect(put.body).toMatchObject({message: 'Profile was successfully deleted'})
    })
})