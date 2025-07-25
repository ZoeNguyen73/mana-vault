require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const cardRouter = require("./routes/cardRoutes");
const scryfallRouter = require("./routes/scryfallRoutes");

const errorHandler = require("./middlewares/errorHandler");

const app = express();
const port = process.env.PORT || 8800;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: process.env.CORS_ORIGIN }));

// all routes
app.use("/api/v1/cards", cardRouter);
app.use("/api/v1/scryfall", scryfallRouter);

// Centralized error handling middleware
app.use(errorHandler);

app.listen(port, async() => {
  try {
    await mongoose.connect(process.env.MONGO_DB_STRING, { dbName: "mana-vault" });
  } catch (error) {
    console.log(`====>Failed to connect to DB<==== Error: ${error}`);
    process.exit(1);
  }
  console.log(`====>Connected to MongoDB`);
  console.log(`====>Mana Vault app listening on port ${port}<====`);
})