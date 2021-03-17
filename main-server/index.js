const express = require('express');
const cors = require('cors');
const session = require('express-session');
const https = require('https');
const fs = require('fs');

const app = express();
const controller1 = require('./controllers/login');
const controller2 = require('./controllers/logout');
const PORT = 4000;

app.use(
  session({
    secret: '@songnumberbook',
    resave: false,
    saveUninitialized: true,
    cookie: {
      domain: 'songnumberbook.ga',
      path: '/',
      maxAge: 24 * 6 * 60 * 10000,
      sameSite: 'None',
      httpOnly: true,
      secure: true,
    },
  })
);

app.use(express.json());

app.use(cors({
  origin: 'https://songnumberbook.ga:3000',
  Methods: ['POST', 'GET', 'OPTIONS'],
  credentials: true
}));

app.get('/', (req, res) => {
  res.send('hello');
});
app.post('/login', controller1.login);
app.post('/logout', controller2.logout);

const server = https
  .createServer(
    {
      key: fs.readFileSync('./key.pem', 'utf-8'),
      cert: fs.readFileSync('./cert.pem', 'utf-8'),
    }
    , app
  ).listen(PORT);
module.exports = server;