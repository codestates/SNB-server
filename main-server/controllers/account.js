const { User: users } = require('../models'); // 데이터베이스 구현되어야함

module.exports = {
  login: async (req, res) => {
    // console.log(req.body) // email, password 들어옴
    // console.log(req.session) // 세션 들어와야함 (쿠키포함)
    const userInfo = await users.findOne({
      where: { email: req.body.email, password: req.body.password },
    });

    if (!userInfo) {
      res.status(404).json({ 'message': 'Invalid user or Wrong password' });
    } else {
      req.session.save(() => {
        req.session.userid = userInfo.email;
        res.status(200).json({ 'message': 'ok' });
      });
    }
  },
  logout: async (req, res) => {
    req.session.destroy();
    res.status(200).json({ 'message': 'ok' });
  }
};