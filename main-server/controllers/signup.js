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
        .then((user, created) => {
          if (!created) {
            res.status(409).json({ 'message': 'email exists' });
          } else {
            req.session.save(() => {
              const { email, username, createdAt } = user[0].dataValues;
              req.session.userid = email;
              res.status(200).json({ 'message': 'ok', lists: [], email, username, createdAt });
            });
          }
        });
    }
  },
};