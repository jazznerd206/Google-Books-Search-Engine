import axios from "axios";

export default {
  bookSearch: function(bookTitle) {
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + bookTitle);
  },
  bookGenreSearch: function(genre) {
    return axios.get('https://openlibrary.org/search.json?q=subject:' + genre);
  },
  bookCoverSearch: function(olid) {
    return axios.get('https://covers.openlibrary.org/b/olid/' + olid);
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  randomBooks: function(value) {
    return axios.get('GOOGLE BOOKS API ENDPOINT FOR RANDOMS')
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
