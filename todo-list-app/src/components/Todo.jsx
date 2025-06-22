import "./Todo.css";
import { useState } from "react";
import { TodoDatetime } from "./TodoDatetime";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const Todo = () => {  
  const [task,setTask] = useState([]);
   
  const handleFormSubmit = (inputValue) => {
    if(!inputValue) return;
    if(task.includes(inputValue)) return;
    setTask((prevTask) => [...prevTask, inputValue]);
  };

    const handleDelete = (value) =>
    {
      const updatedTask = task.filter((curTask) => curTask !== value);
      setTask(updatedTask);
    };

    const handleClearButton = () => {
      setTask([]);
    };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo list</h1>
        <TodoDatetime />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => {
           return <TodoList key={index} data={curTask} onhandleDeleteTodo={handleDelete}></TodoList>
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearButton}>Clear All</button>
      </section>
    </section>
  );
};
