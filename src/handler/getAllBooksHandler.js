const books = require('../books');

const getAllBooksHandler = (request, h) => {
  const resultBook = books.map((book) => ({
    id: book.id,
    name: book.name,
    publisher: book.publisher,
  }));
  const { name } = request.query;
  const { reading } = request.query;
  const { finished } = request.query;

  if (name !== undefined) {
    const filterBooks = resultBook.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()));
    const response = h.response({
      status: 'success',
      data: {
        books: filterBooks.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    response.code(200);
    return response;
  }
  if (reading) {
    const filterBooks = books.filter((book) => Number(book.reading) === Number(reading));
    const response = h.response({
      status: 'success',
      data: {
        books: filterBooks.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    response.code(200);
    return response;
  }
  if (finished) {
    const filterBooks = books.filter((book) => Number(book.finished) === Number(finished));
    const response = h.response({
      status: 'success',
      data: {
        books: filterBooks.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'success',
    data: {
      books: resultBook,
    },
  });
  response.code(200);
  return response;
};

module.exports = getAllBooksHandler;
