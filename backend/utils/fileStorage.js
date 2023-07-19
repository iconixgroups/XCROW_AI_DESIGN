const AWS = require('aws-sdk');
const fs = require('fs');
const s3 = new AWS.S3();

const uploadFile = (fileName) => {
  const fileContent = fs.readFileSync(fileName);

  const params = {
    Bucket: 'BUCKET_NAME',
    Key: fileName,
    Body: fileContent
  };

  s3.upload(params, function(err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);
  });
};

const downloadFile = (fileName) => {
  const params = {
    Bucket: 'BUCKET_NAME',
    Key: fileName
  };

  s3.getObject(params, function(err, data) {
    if (err) console.error(err);
    fs.writeFileSync(fileName, data.Body.toString());
  });
};

module.exports = {
  uploadFile,
  downloadFile,
  s3
};