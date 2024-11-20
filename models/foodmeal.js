"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FoodMeal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FoodMeal.init(
    {
      foodId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Foods",
          key: "id",
        },
      },
      mealId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Meals",
          key: "id",
        },
      },
      qtt: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      modelName: "FoodMeal",
    }
  );
  return FoodMeal;
};
