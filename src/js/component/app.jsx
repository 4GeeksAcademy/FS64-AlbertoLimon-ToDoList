import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faCheck, faPlus } from "@fortawesome/free-solid-svg-icons"; 
import "../../styles/styles.css";

const App = () => <TodoApp />;

const TodoApp = () => {
  const [toDoList, setToDoList] = useState([]);

  const addTodo = (message) => {
    setToDoList([...toDoList, message]);
  };

  const deleteTodo = (message) => {
    let deleteMessageIndex = toDoList.indexOf(message);
    setToDoList([
      ...toDoList.slice(0, deleteMessageIndex),
      ...toDoList.slice(deleteMessageIndex + 1)
    ]);
  };

  const TodoHeader = () => (
    <div id="header">
      <h1>ToDo List!</h1>
    </div>
  );

  const TodoForm = ({ addTodo }) => {
    const [input, setInput] = useState("");
  
    const changeHandler = (event) => {
      setInput(event.target.value);
    };
  
    const submitHandler = (event) => {
      addTodo(input);
      setInput("");
    };
  
    return (
      <div id="form">
        <input
          id="form__input"
          type="text"
          value={input}
          onChange={changeHandler}
        />
        <button id="form__submit" onClick={submitHandler}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        
      </div>
    );
  };

  
  const Todo = ({ message, deleteTodo }) => {
    const handleSubmit = (event) => {
      deleteTodo(message);
    };
  
    return (
      <li id="todo">
        <span id="todo__label">{message + "  "}</span>
        <button id="todo__delete" onClick={handleSubmit}>
          <FontAwesomeIcon icon={faX} />
        </button>
        <div id="icons">
        <FontAwesomeIcon icon={faCheck} />
          
        </div>
        
      </li>
    );
  };

  const TodoList = ({ messageList, deleteTodo }) => (
    <ol id="todolist">
      {messageList.map((message, index) => (
        <Todo message={message} deleteTodo={deleteTodo} key={index} />
      ))}
    </ol>
  );

  return (
    <div>
      <TodoHeader />
      <TodoForm addTodo={addTodo} /> 
      <TodoList messageList={toDoList} deleteTodo={deleteTodo} />
    </div>
  );
};










export default App;
