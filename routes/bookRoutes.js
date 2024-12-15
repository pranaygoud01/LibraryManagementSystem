const express = require("express");
const { addBook, borrowBook } = require("../controllers/bookController");
const { protect } = require("../middlewares/auth");
const router = express.Router();

router.post("/add", protect, addBook);
router.post("/borrow/:id", protect, borrowBook);

module.exports = router;
