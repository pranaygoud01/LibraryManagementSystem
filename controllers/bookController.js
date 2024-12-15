const Book = require("../models/Book");
const User = require("../models/User");

exports.addBook = async (req, res) => {
  const { title, genre, stock } = req.body;

  try {
    const book = await Book.create({
      title,
      genre,
      stock,
      author: req.user._id,
    });
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.borrowBook = async (req, res) => {
  const bookId = req.params.id;

  try {
    const book = await Book.findById(bookId);
    if (!book || book.stock <= 0) {
      return res.status(404).json({ message: "Book not available" });
    }

    if (req.user.borrowedBooks.length >= 5) {
      return res.status(400).json({ message: "Borrowing limit reached" });
    }

    book.stock -= 1;
    req.user.borrowedBooks.push(book._id);

    await book.save();
    await req.user.save();

    res.json({ message: "Book borrowed successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
