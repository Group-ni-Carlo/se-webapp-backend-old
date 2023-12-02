import express from 'express';
import bodyParser from 'body-parser';

async function startServer() {
  const app = express();

  app.use(bodyParser.json()).listen(3001, () => {
    console.log('Server started at http://localhost:3000');
  });
}

startServer();
