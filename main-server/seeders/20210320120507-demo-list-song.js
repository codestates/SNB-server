'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const lists = await queryInterface.sequelize.query('SELECT id FROM Lists;');
    const songs = await queryInterface.sequelize.query('SELECT id FROM Songs;');

    await queryInterface.bulkInsert('List_Song', [
      {
        ListId: lists[0][0].id,
        SongId: songs[0][0].id,
      },
      {
        ListId: lists[0][0].id,
        SongId: songs[0][1].id,
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
    queryInterface.bulkDelete('List_Song', null, {});
  }
};
