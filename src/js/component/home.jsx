import React from 'react'
import { useState } from 'react'
import '../../styles/App.css'
import { TodoHeader } from './TodoHeader.jsx'
import { TodoForm } from './TodoForm.jsx'
import { TodoList } from './TodoList.jsx'
import { TodoSearch } from './TodoSearch.jsx'




//create your first component
const Home = () => {
	const [messageList, setMessageList] = useState(["Learn React","Buy Hans Thermomix","Get a job"]);
    
    const addTodo = (message) => {
      setMessageList([...messageList, message]);
    };
  
    const deleteTodo = (messageToDelete) => {
      const updateMessageList = messageList.filter(message => message !== messageToDelete)
      setMessageList(updateMessageList)
    };
  
    return (
      <div className="app">
        <TodoSearch todos={messageList} />
        <TodoHeader />
        <TodoForm addTodo={addTodo} /> <br /> 
        <TodoList messageList={messageList} deleteTodo={deleteTodo} />
      </div>
    );
  };

export default Home;
