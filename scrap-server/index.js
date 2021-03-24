require('dotenv').config();
const https = require('https');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const fs = require('fs');

const v1Router = require('./routes/v1/index');

const app = express();
const port = process.env.SERVER_PORT;

app.use(logger('dev'));
app.use(express.json());

app.use(cors({
  origin: true,
  methods: ['GET', 'OPTION'],
  credentials: true,
}));

app.use('/v1', v1Router);


// 인스턴스에서 작동하는 코드
// module.exports = https.createServer(
//   {
//     ca: fs.readFileSync('./fullchain.pem'),
//    key: fs.readFileSync('./privkey.pem'),
//    cert: fs.readFileSync('./cert.pem')
//   }
// , app).listen(port, () => {
//   console.log(`🚀 Server is starting on ${port}`);
// });

// 로컬에서 작동하는코드
let server;
if (fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
  const privateKey = fs.readFileSync(__dirname + '/key.pem', 'utf8');
  const certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8');
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(port, () => console.log('server runnning by https'));
} else {
  server = app.listen(port, () => {
    console.log(`server listening on ${port} by http`);
  });
}

module.exports = server;