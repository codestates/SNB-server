const { User: UserModel } = require('../models');

module.exports = {
  signup: async (req, res) => {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      res.status(422).json({ 'message': 'insufficient parameters supplied' });
    } else {
      const [user, created] = await UserModel
        .findOrCreate({
          where: {
            email: email,
          },
          defaults: {
            password: password,
            username: username,
          },
        });

      if (!created) {
        res.status(409).json({ 'message': 'email exists' });
      } else {
        req.session.save(() => {
          const { email, username, createdAt } = user.dataValues;
          req.session.userid = email;
          res.status(200).json({ 'message': 'ok', lists: [], email, username, createdAt });
        });
      }
    }
  },
};