require('dotenv').config();
const axios = require('axios');

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
      res.status(200).json({ 'message': 'ok', accessToken: accessToken });
    }).catch(e => {
      res.status(404).json({ 'message': 'Invalid Authorization code' });
    });
  },
};