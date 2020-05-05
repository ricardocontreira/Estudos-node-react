'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Users', 'UserName', {
          type: Sequelize.STRING
        }, { transaction: t }),
        queryInterface.addColumn('Users', 'Password', {
          type: Sequelize.STRING,
        }, { transaction: t })
      ]);
    });
    
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Users', 'UsarName', { transaction: t }),
        queryInterface.removeColumn('Users', 'Password', { transaction: t })
      ]);
    });
  }
};