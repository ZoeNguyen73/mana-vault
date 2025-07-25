const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController");

router.post("/", cardController.createCard);
router.get("/", cardController.getCards);
router.get("/:id", cardController.getCard);
router.put("/:id", cardController.updateCard);
router.delete("/:id", cardController.deleteCard);

module.exports = router;