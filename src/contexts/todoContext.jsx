import React, { createContext, useReducer } from "react";
import { TodosReducer } from "../reducers/todosReducer";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, dispatch] = useReducer(TodosReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
