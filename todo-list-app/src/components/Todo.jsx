import "./Todo.css";
import { useState } from "react";
import { TodoDatetime } from "./TodoDatetime";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const Todo = () => {  
  const [task,setTask] = useState([]);
   
  const handleFormSubmit = (inputValue) => {
    const {id, content, checked} = inputValue;
    if(!content) return;
    const ifTodoContentMatched = task.find((curTask) => curTask.content === content);
    if(ifTodoContentMatched) 
      return;
  
    setTask((prevTask) => [...prevTask, {id:id, content:content, checked:checked}]);
  };

    const handleDelete = (value) =>
    {
      const updatedTask = task.filter((curTask) => curTask.content !== value);
      setTask(updatedTask);
    };

    const handleClearButton = () => {
      setTask([]);
    };
    const handlecheckedTodo = (content) =>{
      const updatedTask = task.map((curTask) => {
        if(curTask.content === content) {
          return {...curTask, checked: !curTask.checked};
        } 
        else {
        return curTask;}
      });
      setTask(updatedTask);
    }
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
           return (
          <TodoList
           key={curTask.id} 
           data={curTask.content} 
           checked={curTask.checked}
           onhandleDeleteTodo={handleDelete}
           onhandlecheckedTodo={handlecheckedTodo}></TodoList>
           );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearButton}>Clear All</button>
      </section>
    </section>
  );
};
