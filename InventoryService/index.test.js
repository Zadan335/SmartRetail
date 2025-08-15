const request = require('supertest');
const app = require('./index');

test('GET /inventory', async () => {
    const res = await request(app).get('/inventory');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Inventory works!');
});
