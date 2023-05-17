import React, { useState } from "react";

function BookEdit({ book, onEdit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("new title", title);
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
