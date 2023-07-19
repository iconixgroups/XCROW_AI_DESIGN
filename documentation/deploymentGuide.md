# Deployment Guide

## Prerequisites

- Node.js and npm installed
- Python 3.7+ installed
- MySQL server installed and running
- AWS S3 bucket created
- OAuth2.0 credentials obtained

## Steps

1. Clone the repository and navigate to the project directory.

```bash
git clone <repository_url>
cd <project_directory>
```

2. Install the required dependencies for frontend and backend.

```bash
cd frontend
npm install
cd ../backend
npm install
```

3. Install the required Python packages for AI module.

```bash
cd ../ai
pip install -r requirements.txt
```

4. Set up the environment variables. Create a `.env` file in the root directory and fill in the necessary details.

```bash
DB_HOST=<your_database_host>
DB_USER=<your_database_user>
DB_PASSWORD=<your_database_password>
DB_NAME=<your_database_name>
AWS_ACCESS_KEY_ID=<your_aws_access_key_id>
AWS_SECRET_ACCESS_KEY=<your_aws_secret_access_key>
AWS_S3_BUCKET_NAME=<your_s3_bucket_name>
OAUTH2_CLIENT_ID=<your_oauth2_client_id>
OAUTH2_CLIENT_SECRET=<your_oauth2_client_secret>
```

5. Run the database setup script to create necessary tables.

```bash
cd ../database
node dbSetup.js
```

6. Start the backend server.

```bash
cd ../backend
node server.js
```

7. In a new terminal, start the frontend server.

```bash
cd ../frontend
npm start
```

8. The application should now be running at `http://localhost:3000`.

## Updating the AI Model

If you need to update the AI model, navigate to the `ai/model` directory and run the training script.

```bash
cd ai/model
python train.py
```

This will generate a new model file `model.h5` which will be used for future predictions.

## Testing

To run the tests, navigate to the `tests` directory and run the appropriate test files.

```bash
cd ../tests
node testServer.js
python testModel.py
node testDbQueries.js
node testS3.js
node testOauth2.js
```

## Deployment

For deploying the application to a live server, you might need to use a process manager like PM2 for Node.js applications and a web server like Nginx to serve the frontend static files. Also, make sure to secure your application by using HTTPS and storing your environment variables securely.