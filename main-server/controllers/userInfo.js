const { User: users, List: lists } = require('../models');

module.exports = {
  userinfo: async (req, res) => {
    // console.log(req.session) // 세션이 들어와야함
    const sess = req.session;

    if (sess.userid) {
      users.findAll({
        where: {
          email: sess.userid,
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
        }
        res.status(200).json({ 'message': 'ok', 'list': lists });
      }).catch(e => {
        res.status(500);
      });
    } else {
      res.status(404).json({ 'message': 'Invalid session' });
    }
  }
};