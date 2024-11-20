const { Food } = require("../models");

class FoodController extends ControllerBase {
  constructor(app) {
    super("/foods", app, Food, false);
  }

  getMatrix() {
    const await 
  }



}

module.exports = (app) => new FoodController(app);
