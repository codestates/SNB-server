'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('List_Song', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ListId:{
        type: Sequelize.INTEGER,
        references:{model: 'Lists', key: 'id'}
      },
      SongId:{
        type: Sequelize.INTEGER,
        references:{model: 'Songs', key: 'id'}
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('List_Song');
  }
};
