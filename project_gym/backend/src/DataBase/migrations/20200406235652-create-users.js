'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.createTable('users', {
         id: {
           type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           alloNull: false, 
         },

         name: {
           type: Sequelize.STRING,
           alloNull: false,
         },

         lastname: {
           type: Sequelize.STRING,
           alloNull: false
         },

         age: {
           type: Sequelize.INTEGER,
           alloNull: false
         },

         adress:{
           type: Sequelize.STRING,
           alloNull: false
         },

         email:{

          type: Sequelize.STRING,
          alloNull: false
         },

         ddd:{
           type: Sequelize.INTEGER,
           alloNull: false,
         },

         phone:{
           type:Sequelize.INTEGER,
           alloNull: false,
         }, 

         created_at: {
           type: Sequelize.DATE,
           alloNull: false
         }, 
         updated_at: {
          type: Sequelize.DATE,
          alloNull: false
        }

        });
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('users');
    
  }
};
