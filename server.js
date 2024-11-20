require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const refreshTokenMiddleware = require("./middlewares/refresh-token-middleware");
const FoodControllerSetup = require("./controllers/food-controller");

const PORT = process.env.PORT || 3000;

const app = express();

// middlewares

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(refreshTokenMiddleware);

// routes & controllers

FoodControllerSetup(app).setup();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
