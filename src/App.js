import React, { useState } from "react";
import BookCreate from "./component/BookCreate";
import BookList from "./component/BookList";
// The lowest common parent is the best place the state of your app. The lowest common parent is the parent that has all the components that will use the state under it (it's children) so in this app we would place the state here in the App.js file because all its children need to access the state.

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookId = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  function createBook(title) {
    // Bad code this doesnt make react re render the component
    // books.push({ id: 123, title: title });
    // console.log(books);
    // setBooks(books);
    // when inserting elements you can use slice. array.slice(1) would include everything starting at index 1 until the end and including the end of the array
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.floor() * 9999),
        // title: title (this is the same as just writing title as the key and value pairs are identical)
        title,
      },
    ];
    setBooks(updatedBooks);
  }

  return (
    <div>
      <BookList books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
