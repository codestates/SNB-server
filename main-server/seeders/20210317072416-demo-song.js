'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Songs', [
      {
        songNum: 62849,
        title: '여름별',
        singer: '정동원',
        link: 'https://www.youtube.com/user/ziller/search?query=62849'
      },
      {
        songNum: 76108,
        title: '봄여름가을겨울',
        singer: '김재환',
        link: 'https://www.youtube.com/user/ziller/search?query=76108'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
