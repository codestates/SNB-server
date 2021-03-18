const { User: UserModel, List: ListModel, Song: SongModel } = require('../models');

const myListController = {
  add: async (req, res) => {
    const {email, listname: listName} = req.body;
    const userId = await UserModel.findOne({
      where: {email: email}
    });

    if(!userId) {
      res.status(404).json({ 'message': 'invalid email' });
      return;
    }

    const result = await ListModel.create({
      UserId: userId.id,
      name: listName
    });

    if(!result) {
      res.status(500).json({ 'message': 'fail to insert mylist' });
    } else {
      res.status(201).json({ 
        'id': result.id, 
        'message': 'created' 
      });
    }
  },

  remove: async(req, res) => {
    const {listid: listId} = req.body;

    const result = await ListModel.destroy({
      where: {
        id: listId
      }
    });

    if(!result) {
      res.status(500).json({ 'message': 'fail to delete mylist' });
    } else {
      res.status(200).json({ 'message': 'deleted' });
    }
  },

  inquiry: async(req, res) => {
    const {listid: listId} = req.body;
    const result = await ListModel.findOne({
      where: {
        id: listId
      },
      include: [{
        model: SongModel,
        required: true,
        attributes: ['songNum', 'title'],
        through: {
          attributes: ['ListId', 'SongId']
        }
      }]
    });
    if(!result) {
      res.status(400).json({'message': 'invalid request'});
    }else {
      res.status(200).json(result);
    }
  } 
};

module.exports = myListController;