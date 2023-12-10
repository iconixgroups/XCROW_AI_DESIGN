import { assert } from 'assert';
import { uploadFile, downloadFile, deleteFile } from '../../fileStorage/s3';

describe('S3 File Storage', () => {
  it('should upload a file', async () => {
    const file: Buffer = Buffer.from('Hello World');
    const result: boolean = await uploadFile('test.txt', file);
    assert(result);
  });

  it('should download a file', async () => {
    const result: boolean = await downloadFile('test.txt');
    assert(result);
  });

  it('should delete a file', async () => {
    const result: boolean = await deleteFile('test.txt');
    assert(result);
  });
});