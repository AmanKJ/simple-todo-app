import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/todoContext";

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      todo: {
        title,
        body,
      },
    });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title for todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="note for todo"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <input type="submit" value="Add todo" />
    </form>
  );
};

export default TodoForm;
