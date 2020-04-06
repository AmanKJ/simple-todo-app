import React from "react";
import "./App.css";
import TodoContextProvider from "./contexts/todoContext";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Navbar />
      </TodoContextProvider>
    </div>
  );
}

export default App;
