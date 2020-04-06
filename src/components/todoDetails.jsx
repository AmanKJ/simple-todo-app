import React, { useContext } from "react";
import { TodoContext } from "../contexts/todoContext";

const TodoDetails = ({ todo }) => {
  const { deleteTodos } = useContext(TodoContext);
  return (
    <li onClick={() => deleteTodos(todo.id)}>
      <div className="title">{todo.title}</div>
      <div className="body">{todo.body}</div>
    </li>
  );
};

export default TodoDetails;
