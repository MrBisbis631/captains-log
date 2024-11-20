class Getatrix {
  constructor(parameters) {
    this.endoint = process.env.FOODMATRIX_ENDPOINT;
    this.apiKey = process.env.FOODMATRIX_API_KEY;
    this.apiSecret = process.env.FOODMATRIX_API_SECRET;
  }

  getForArray(meals) {
    // ...

    return meals.map((meal) => {
      return {
        ...meal,
        food: this.getFood(meal.foodId),
      };
    });
  }

}