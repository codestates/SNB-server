const { searchSongs, TITLE, SINGER } = require('../../modules/scrapper');
const logger = require('../../config/winston');

const searchController = {
  getSongsByTitle: async (req, res) => {
    const { title, numOfRow, page } = req.query;
    try {
      const result = await searchSongs(TITLE, title, numOfRow, page);
      res.status(200).json(result);
    } catch (error) {
      logger.error(`Error in Searching by Title: ${error}`);
    }

  },
  getSongsBySinger: async (req, res) => {
    const { singer, numOfRow, page } = req.query;
    try {
      const result = await searchSongs(SINGER, singer, numOfRow, page);
      res.status(200).json(result);
    } catch (error) {
      logger.error(`Error in Searching by Singer: ${error}`);
    }
  }
};

module.exports = searchController;