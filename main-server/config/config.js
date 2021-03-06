const dotenv = require('dotenv');
dotenv.config();

const config = {
  development: {
    host: process.env.DATABASE_SPRINT_HOST,
    username: process.env.DATABASE_SPRINT_USER,
    password: process.env.DATABASE_SPRINT_PASSWORD,
    database: 'snb',
    dialect: 'mysql',
    logging: false
  },
  test: {
    host: process.env.DATABASE_SPRINT_HOST,
    username: process.env.DATABASE_SPRINT_USER,
    password: process.env.DATABASE_SPRINT_PASSWORD,
    database: 'snb_test',
    dialect: 'mysql',
    logging: false
  }
};

module.exports = config;
