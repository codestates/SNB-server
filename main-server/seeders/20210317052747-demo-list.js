'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.sequelize.query('SELECT id FROM Users;');

    await queryInterface.bulkInsert('Lists', [
      {
        name: 'user1_list1',
        UserId: users[0][1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'user1_list2',
        UserId: users[0][1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'user2_list1',
        UserId: users[0][2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
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
    queryInterface.bulkDelete('Lists', null, {});
  }
};
