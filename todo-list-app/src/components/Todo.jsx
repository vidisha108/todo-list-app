import "./Todo.css";
import { useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";


export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task,setTask] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault(); 

    if(!inputValue) return;
    if(task.includes(inputValue))
    {
      setInputValue("");
      return;
    }
    setTask((prev) => [...prev, inputValue]);
    setInputValue(""); 
    
  }; 
  return (
    <section className="todo-container">
      <header>
        <h1>Todo list</h1>
      </header>

      <section className="form">
        <form onSubmit={handleFormSubmit}>
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
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => (
           
            <li key={index} className="todo-item">
              <span>{curTask}</span>
              <button className="check-btn">           
                <MdCheck /> </button>
              <button className="delete-btn">
                <MdDeleteForever />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};
