"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Seed the Food table with some initial data
    await queryInterface.bulkInsert("Foods", [
      {
        name: "Apple",
        calories: 95,
        slug: "apple",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Banana",
        calories: 105,
        slug: "banana",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Carrot",
        calories: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Broccoli",
        calories: 55,
        slug: "broccoli",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Remove all data from the Food table
    await queryInterface.bulkDelete("Foods", null, {});
  },
};
