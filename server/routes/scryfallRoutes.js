const express = require("express");
const router = express.Router();
const scryfallController = require("../controllers/scryfallController");

router.get("/searchByName/:string", scryfallController.searchByName);
router.get("/:id", scryfallController.getById);

module.exports = router;