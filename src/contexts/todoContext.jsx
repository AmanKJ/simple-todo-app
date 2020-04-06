import React, { useState, createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([
    {
      title: "For today [Important]",
      body: "Today I will eat chicken",
      id: 1,
    },
    {
      title: "For tomorrow [Important]",
      body: "Tomorrow I will eat Mutton",
      id: 2,
    },
  ]);

  const addTodos = (title, body) => {
    setTodos([...todos, { title, body, id: uuidv4() }]);
  };

  const deleteTodos = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodos, deleteTodos }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
