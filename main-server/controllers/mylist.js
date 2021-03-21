const { User: UserModel, List: ListModel, Song: SongModel, List_Song: ListSongModel } = require('../models');

const myListController = {
  listName: async (req, res) => {
    // console.log(req.session) // 세션이 들어와야함
    const sess = req.session;

    if (sess.userid) {
      UserModel.findAll({
        where: {
          email: sess.userid,
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
        }
        res.status(200).json({ 'message': 'ok', lists });
      }).catch(e => {
        res.status(500);
      });
    } else {
      res.status(404).json({ 'message': 'Invalid session' });
    }
  },

  add: async (req, res) => {
    const { email, listname: listName } = req.body;
    const userId = await UserModel.findOne({
      where: { email: email }
    });

    if (!userId) {
      res.status(404).json({ 'message': 'invalid email' });
      return;
    }

    const result = await ListModel.create({
      UserId: userId.id,
      name: listName
    });

    if (!result) {
      res.status(500).json({ 'message': 'fail to insert mylist' });
    } else {
      res.status(201).json({
        'id': result.id,
        'message': 'created'
      });
    }
  },

  remove: async (req, res) => {

    const { listid: id } = req.body;
    ListSongModel.destroy({
      where: {
        ListId: id,
      }
    }).then(() => {
      ListModel.destroy({
        where: {
          id: id
        }
      });
    }).then(() => {
      res.status(200).json({ 'message': 'deleted' });
    });
  }
  ,

  inquiry: async (req, res) => {
    const { listid: listId } = req.body;
    const result = await ListModel.findOne({
      where: {
        id: listId
      },
      include: [{
        model: SongModel,
        required: true,
        attributes: ['songNum', 'title'],
        as: 'Song',
        through: {
          attributes: ['ListId', 'SongId']
        }
      }]
    });
    if (!result) {
      const result = await ListModel.findOne({
        where: {
          id: listId
        },
      });
      res.status(200).json({ result, 'Song': [] });
    } else {
      res.status(200).json(result);
    }
  }
};

module.exports = myListController;