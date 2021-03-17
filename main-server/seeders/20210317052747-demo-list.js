'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   const users = await queryInterface.sequelize.query(`SELECT id FROM Users;`);
   console.log(users[0]);

    await queryInterface.bulkInsert('Lists', [
      {
        name: 'user1_list1',
        user_id: users[0][1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'user1_list2',
        user_id: users[0][1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'user2_list1',
        user_id: users[0][2].id,
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
