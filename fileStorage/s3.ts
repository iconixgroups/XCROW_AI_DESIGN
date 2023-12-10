const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const uploadFile = (filePath: string): void => {
    const fileContent = fs.readFileSync(filePath);

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: path.basename(filePath),
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
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
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