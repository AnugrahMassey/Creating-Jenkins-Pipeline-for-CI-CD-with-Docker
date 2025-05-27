const request = require('supertest');
const app = require('../app');

afterAll(() => {
  app.close();
});

describe('GET /', () => {
  it('should return welcome message', async () => {
    const response = await new Promise((resolve) => {
      app.emit('request', 
        { method: 'GET', url: '/' }, 
        {
          setHeader: jest.fn(),
          writeHead: jest.fn(),
          end: (msg) => resolve(msg)
        }
      );
    });
    expect(response).toContain('Jenkins CI/CD Pipeline');
  });
});

describe('GET /health', () => {
  it('should return health status', async () => {
    const response = await new Promise((resolve) => {
      app.emit('request', 
        { method: 'GET', url: '/health' }, 
        {
          setHeader: jest.fn(),
          writeHead: jest.fn(),
          end: (msg) => resolve(JSON.parse(msg))
        }
      );
    });
    expect(response.status).toBe('OK');
  });
});