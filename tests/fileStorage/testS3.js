const assert = require('assert');
const s3 = require('../../fileStorage/s3');

describe('S3 File Storage', () => {
  it('should upload a file', async () => {
    const file = Buffer.from('Hello World');
    const result = await s3.uploadFile('test.txt', file);
    assert(result);
  });

  it('should download a file', async () => {
    const result = await s3.downloadFile('test.txt');
    assert(result);
  });

  it('should delete a file', async () => {
    const result = await s3.deleteFile('test.txt');
    assert(result);
  });
});