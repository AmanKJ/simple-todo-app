import React, { useContext } from "react";
import { TodoContext } from "../contexts/todoContext";
import TodoDetails from "./todoDetails";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return todos.length ? (
    <div className="book-list">
      <ul>
        {todos.map((todo) => {
          return <TodoDetails todo={todo} key={todo.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">Nothing to do. Its FreeTime!!</div>
  );
};

export default TodoList;
