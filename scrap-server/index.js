require('dotenv').config();
//const https = require('https');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const v1Router = require('./routes/v1/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(cors({
  origin: 'https://localhost:3000',
  methods: ['GET', 'OPTION'],
  credentials: true,
}));

app.use('/v1', v1Router);

app.listen(5000, () => {
  console.log('server listen on 5000');
});

module.exports = app;