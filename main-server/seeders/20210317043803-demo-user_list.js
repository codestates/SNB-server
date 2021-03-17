'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

  //await queryInterface.bulkInsert('People', [{
  //    name: 'John Doe',
  //    isBetaMember: false
  //  }], {});


    await queryInterface.bulkInsert('Users', [
      {
        email: 'test@gmail.com',
        password: '1234',
        username: 'test',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'user1@gmail.com',
        password: '1234',
        username: 'user1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'user2@gmail.com',
        password: '1234',
        username: 'user2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Users', null, {});
    queryInterface.bulkDelete('Lists', null, {});
  }
};
