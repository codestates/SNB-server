const express = require('express');
const cors = require('cors');
const session = require('express-session');
const https = require('https');
const fs = require('fs');

const app = express();
const accountController = require('./controllers/account');
//const controller2 = require('./controllers/logout');
const oAuthController = require('./controllers/oauth');
const myListRouter = require('./routes/mylist');
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
app.post('/login', accountController.login);
app.post('/logout', accountController.logout);
app.post('/oauth/login', oAuthController.oauth);
app.use('/mylist', myListRouter);

const server = https
  .createServer(
    {
      key: fs.readFileSync('./key.pem', 'utf-8'),
      cert: fs.readFileSync('./cert.pem', 'utf-8'),
    }
    , app
  ).listen(PORT);
module.exports = server;