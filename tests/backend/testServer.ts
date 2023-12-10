import request from 'supertest';
import server from '../../backend/server';
import db from '../../backend/utils/db';

beforeAll(async () => {
  await db.connect();
});

afterAll(async () => {
  await db.close();
});

describe('Test server and routes', () => {
  test('should respond to the GET method', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('should upload file', async () => {
    const response = await request(server)
      .post('/upload')
      .attach('file', 'test.pdf');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('UPLOAD_SUCCESS');
  });

  test('should get project details', async () => {
    const response = await request(server).get('/project/1');
    expect(response.statusCode).toBe(200);
    expect(response.body.projectCode).toBeDefined();
    expect(response.body.projectName).toBeDefined();
  });

  test('should select discipline', async () => {
    const response = await request(server).post('/discipline').send({ discipline: 'Architecture' });
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('DISCIPLINE_SELECTION_SUCCESS');
  });

  test('should get quantity data', async () => {
    const response = await request(server).get('/quantity/1');
    expect(response.statusCode).toBe(200);
    expect(response.body.quantityData).toBeDefined();
  });

  test('should export data', async () => {
    const response = await request(server).get('/export/1');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('EXPORT_SUCCESS');
  });
});