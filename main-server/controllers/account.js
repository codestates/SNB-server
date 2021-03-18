const { User: users, List: lists } = require('../models');

module.exports = {
  login: async (req, res) => {
    // console.log(req.body); // email, password 들어옴
    users.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      },
    }).then((user) => {
      if (!user) {
        res.status(404).json({ 'message': 'Invalid user or Wrong password' });
      } else {
        users.findAll({
          where: {
            email: user.dataValues.email,
          },
          include: [
            {
              model: lists,
              required: true,
              attributes: ['id', 'name'],
            }
          ]
        }).then((result) => {
          let lists = [];
          if (result.length) {
            lists = result[0].Lists.map((list) => {
              return list.dataValues;
            });
            req.session.save(() => {
              const { email, username, createdAt } = result[0].dataValues;
              req.session.userid = email;
              res.status(200).json({ 'message': 'ok', lists, email, username, createdAt });
            });
          } else {
            users.findOne({
              where: {
                email: req.body.email,
                password: req.body.password
              },
            }).then((user) => {
              const { email, username, createdAt } = user.dataValues;
              res.status(200).json({ 'message': 'ok', lists, email, username, createdAt });
            });
          }
        }).catch(e => {
          res.status(500);
        });
      }
    });
  },
  logout: async (req, res) => {
    req.session.destroy();
    res.status(200).json({ 'message': 'ok' });
  }
};