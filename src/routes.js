const addBooksHandler = require('./handler/addBooksHandler');
const getAllBooksHandler = require('./handler/getAllBooksHandler');
const getBooksHandler = require('./handler/getBooksHandler');
const updatedBookHandler = require('./handler/updatedBookHandler');
const deleteBookHandler = require('./handler/deleteBookHandler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBooksHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updatedBookHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookHandler,
  },
];

module.exports = routes;
