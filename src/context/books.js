import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  }, []);

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    console.log(response);

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", { title });

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
  };

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
