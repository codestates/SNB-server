'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // field 추가
    await queryInterface.addColumn('Lists', 'UserId', Sequelize.INTEGER);

    // foreign key 연결
    await queryInterface.addConstraint('Lists', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'user_list_fk',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Lists', 'user_list_fk');
    await queryInterface.removeColumn('Lists', 'UserId');
  }
};
