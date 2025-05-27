const request = require('supertest');
const app = require('../app');

let server;

beforeAll((done) => {
  server = app.listen(3001, done); // start the app on a different port to avoid conflicts
});

afterAll((done) => {
  server.close(done);
});

describe('GET /', () => {
  it('should return welcome message', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Jenkins CI/CD Pipeline');
  });
});

describe('GET /health', () => {
  it('should return health status', async () => {
    const response = await request(server).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('OK');
  });
});
