import React, { useState } from "react";
import axios from "axios";
import BookCreate from "./component/BookCreate";
import BookList from "./component/BookList";
// The lowest common parent is the best place the state of your app. The lowest common parent is the parent that has all the components that will use the state under it (it's children) so in this app we would place the state here in the App.js file because all its children need to access the state.

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  async function createBook(title) {
    const response = await axios.post("http://localhost:3001/books/", title);

    // Bad code this doesnt make react re render the component
    // books.push({ id: 123, title: title });
    // console.log(books);
    // setBooks(books);
    // when inserting elements you can use slice. array.slice(1) would include everything starting at index 1 until the end and including the end of the array
    const updatedBooks = [
      ...books,
      response.data,

      // {
      //   id: Math.round(Math.random() * 9999),
      //   // this doesnt garantee that the id will never be the same but for this small app it is okay to make a random id like this
      //   title,
      //   // title: title (this is the same as just writing title as the key and value pairs are identical)
      // },
    ];
    setBooks(updatedBooks);
  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
