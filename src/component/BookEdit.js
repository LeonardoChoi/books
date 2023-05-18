import React, { useState } from "react";

function BookEdit({ book, onEdit, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onEdit(book.id, title);
    // the book object already has the id and existing title. The title piece of state is the title that the user is changing, it is the newTitle. The title piece of state is the one that they are typing into the input.
    onSubmit();
    wrong way to do it
  };

  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}></form>
      <label>Title</label>
      <input
        type="text"
        className="input"
        value={title}
        onChange={handleChange}
      />
      <button className="button is-primary">Save</button>
    </div>
  );
}

export default BookEdit;
