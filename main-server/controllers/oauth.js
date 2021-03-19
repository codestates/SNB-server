require('dotenv').config();
const axios = require('axios');
const { User: UserModel, List: ListModel } = require('../models');


const clientID = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;

module.exports = {
  oauth: async (req, res) => {
    // console.log(req.body); // authorizationCode 들어와야함
    axios({
      method: 'post',
      url: 'https://github.com/login/oauth/access_token',
      headers: {
        accept: 'application/json',
      },
      data: {
        client_id: clientID,
        client_secret: clientSecret,
        code: req.body.authorizationCode
      }
    }).then((response) => {
      const accessToken = response.data.access_token;
      axios.defaults.headers.common.authorization = 'token ' + accessToken;
      axios.get('https://api.github.com/user')
        .then((result) => {
          UserModel
            .findOrCreate({
              where: {
                email: `${result.data.login}@github.com`,
              },
              defaults: {
                password: 'liIIl1lIll1Iii',
                username: result.data.name,
              },
            })
            .then((user) => {

              const { email } = user[0].dataValues;
              UserModel.findAll({
                where: {
                  email: email,
                },
                include: [
                  {
                    model: ListModel,
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
                  req.session.save(() => {
                    const { email, username, createdAt } = user[0].dataValues;
                    req.session.userid = email;
                    res.status(200).json({ 'message': 'ok', lists, email, username, createdAt });
                  });
                }
              }).catch(e => {
                res.status(500);
              });
            });
        });
    });
  },
};