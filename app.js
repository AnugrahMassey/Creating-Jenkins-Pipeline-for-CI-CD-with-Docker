const request = require('supertest');
const server = require('../app');

afterAll((done) => {
  server.close(done); // Ensure the server closes after tests
});

describe('GET /', () => {
  it('should return welcome message', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toContain('Hello from Jenkins CI/CD Pipeline');
  });
});

describe('GET /health', () => {
  it('should return health status', async () => {
    const res = await request(server).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('OK');
  });
});
