import React, { useState } from "react";
import BookCreate from "./component/BookCreate";
// The lowest common parent is the best place the state of your app. The lowest common parent is the parent that has all the components that will use the state under it (it's children) so in this app we would place the state here in the App.js file because all its children need to access the state.

function App() {
  const [books, setBooks] = useState([]);

  function createBook(title) {
    console.log("add", title);
  }

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
