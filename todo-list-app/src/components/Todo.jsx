import "./Todo.css";
import { useState } from "react";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault(); 
  };// Prevent the default form submission behavior 
  return (
    <section className="todo-container">
      <header>
        <h1>Todo list</h1>
      </header>

      <section className="form">
        <form>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div>
            <button className="todo-button" type="submit">
              Add Task
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};
