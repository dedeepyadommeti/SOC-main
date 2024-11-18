const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3020;

app.use(bodyParser.json());
app.use(cors());


let books = [
    { id: 1, name: 'HTML 5' },
    { id: 2, name: 'CSS 3' },
    { id: 3, name: 'Java Script' },
    { id: 4, name: 'Ajax Programming' },
    { id: 5, name: 'jQuery' },
    { id: 6, name: 'Mastering Node.js' },
    { id: 7, name: 'Angular JS 1.x' },
    { id: 8, name: 'ng-book 2' },
    { id: 9, name: 'Backbone JS' },
    { id: 10, name: 'Yeoman' }
];

app.get('/bookList', (req, res) => {
  res.json(books);
});

app.post('/addBook', (req, res) => {
  const newBook = req.body;
  newBook.id = books.length ? books[books.length - 1].id + 1 : 1;
  books.push(newBook);
  res.status(201).json(newBook);
});

app.put('/update', (req, res) => {
  const updatedBook = req.body;
  const index = books.findIndex(book => book.id === updatedBook.id);
  if (index !== -1) {
    books[index] = updatedBook;
    res.json(updatedBook);
  } else {
    res.status(404).send('Book not found');
  }
});

app.delete('/bookList/:id', (req, res) => {
  
  const bookId = parseInt(req.params.id, 10);
  const index = books.findIndex(book => book.id === bookId);
  if (index !== -1) {
    const deletedBook = books.splice(index, 1);
    res.json(deletedBook);
  } else {
    res.status(404).send('Book not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
