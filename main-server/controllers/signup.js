const { User: users } = require('../models');

module.exports = {
  signup: async (req, res) => {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      res.status(422).json({ 'message': 'insufficient parameters supplied' });
    } else {
      users
        .findOrCreate({
          where: {
            email: email,
          },
          defaults: {
            password: password,
            username: username,
          },
        })
        .then(async (user, created) => {
          if (!created) {
            res.status(409).json({ 'message': 'email exists' });
          } else {
            res.status(201).json({ 'message': 'welcome' });
          }
        });
    }
  },
};