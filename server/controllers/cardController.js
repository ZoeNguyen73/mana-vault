const CardModel = require("../models/CardModel");

const controller = {
  createCard: async (req, res, next) => {
    try {
      const newCard = new Card(req.body);
      const saved = await newCard.save();
      res.status(201).json(saved);
    } catch (err) {
      next(err);
    }
  },

  getCards: async (req, res, next) => {

  },

  getCard: async (req, res, next) => {

  },

  updateCard: async (req, res, next) => {

  },

  deleteCard: async (req, res, next) => {

  },
};

module.exports = controller;