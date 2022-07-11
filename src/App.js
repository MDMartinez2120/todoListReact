import React, { useState, useRef } from "react";
import Todolist from "./Todolist";
import uuidv4 from "uuid/v4";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: 1, name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  return (
    <>
      <Todolist todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Todos</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
