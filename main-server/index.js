const express = require('express');
const cors = require('cors');
const session = require('express-session');
const https = require('https');
const fs = require('fs');

const app = express();
const controller1 = require('./controllers/login');
const controller2 = require('./controllers/logout');
const controller3 = require('./controllers/oauth');
const controller4 = require('./controllers/signup');
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
  origin: true,
  Methods: ['POST', 'GET', 'OPTIONS'],
  credentials: true
}));

app.get('/', (req, res) => {
  res.send('hello');
});
app.post('/login', controller1.login);
app.post('/logout', controller2.logout);
app.post('/oauth/login', controller3.oauth);
app.post('/singup', controller4.signup);

const server = https
  .createServer(
    {
      key: fs.readFileSync('./key.pem', 'utf-8'),
      cert: fs.readFileSync('./cert.pem', 'utf-8'),
    }
    , app
  ).listen(PORT);
module.exports = server;