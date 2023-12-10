const AWS = require('aws-sdk');
const fs = require('fs');
const s3 = new AWS.S3();

const uploadFile = (fileName: string): void => {
  const fileContent: Buffer = fs.readFileSync(fileName);

  const params: AWS.S3.PutObjectRequest = {
    Bucket: 'BUCKET_NAME',
    Key: fileName,
    Body: fileContent
  };

  s3.upload(params, (err: Error, data: AWS.S3.ManagedUpload.SendData) => {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);
  });
};

const downloadFile = (fileName: string): void => {
  const params: AWS.S3.GetObjectRequest = {
    Bucket: 'BUCKET_NAME',
    Key: fileName
  };

  s3.getObject(params, (err: Error, data: AWS.S3.GetObjectOutput) => {
    if (err) console.error(err);
    fs.writeFileSync(fileName, data.Body.toString());
  });
};

export {
  uploadFile,
  downloadFile,
  s3
};