import React from "react";
import TodoContextProvider from "./contexts/todoContext";
import Navbar from "./components/navbar";
import TodoList from "./components/todoList";
import TodoForm from "./components/todoForm";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Navbar />
        <TodoList />
        <TodoForm />
      </TodoContextProvider>
    </div>
  );
}

export default App;
