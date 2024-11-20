"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Meal, {
        through: "FoodMeal",
        foreignKey: "foodId",
        otherKey: "mealId",
      });
    }
  }
  Food.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      calories: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Food",
      indexes: [
        {
          unique: true,
          fields: ["slug"],
        },
      ],
    }
  );
  return Food;
};
