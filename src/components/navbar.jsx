import React, { useContext } from "react";
import { TodoContext } from "../contexts/todoContext";

const Navbar = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div className="navbar">
      <h1>My Todos List</h1>
      <p>Total number of todos : {todos.length} </p>
    </div>
  );
};

export default Navbar;
