const { Song: SongModel, List_Song: ListSongModel } = require('../models');

module.exports = {
  add: (req, res) => {
    const { listid: id, songs } = req.body;

    try {
      //1. song 테이블에 없으면 데이터를 song 테이블에 추가한 후 song의 id를 얻는다.
      const songIdPromises = songs.map(({ songNum, title, singer, link }, _) => {
        return SongModel.findOrCreate({
          where: { songNum },
          defaults: {
            songNum,
            title,
            singer,
            link
          }
        });
      });

      //2. List_Song 테이블에 추가한다. findOrCreate로 중복추가를 막는다.
      Promise.all(songIdPromises)
        .then((results) => {
          const insertingPromise = results.map((result) => {
            return ListSongModel.findOrCreate({
              where: {
                ListId: id,
                SongId: result[0].id
              },
              defaults: {
                ListId: id,
                SongId: result[0].id,
              }
            });
          });
          Promise.all(insertingPromise)
            .then((result) => {
              res.status(200).json({ 'message': 'created' });
            })
            .catch((error) => {
              res.status(500).json({ 'message': 'fail to insert songs in my list' });
            });
        });
    } catch (error) {
      res.status(500).json({ 'message': 'fail to insert songs in my list' });
    }
  },
  remove: async (req, res) => {
    const { listid: id, songs } = req.body;

    try {
      //1. song 테이블에서 song의 id를 구한다.
      const songIdPromises = songs.map(({ songNum }, _) => {
        return SongModel.findOne({
          where: { songNum },
        });
      });

      //2. List_Song 테이블에서 제거한다.
      Promise.all(songIdPromises)
        .then((results) => {
          const insertingPromise = results.map((result) => {
            return ListSongModel.destroy({
              where: {
                ListId: id,
                SongId: result.id
              }
            });
          });
          Promise.all(insertingPromise)
            .then(() => {
              res.status(200).json({ 'message': 'deleted' });
            })
            .catch((error) => {
              res.status(500).json({ 'message': 'fail to remove songs in my list' });
            });
        });
    } catch (error) {
      res.status(500).json({ 'message': 'fail to remove songs in my list' });
    }
  }
};