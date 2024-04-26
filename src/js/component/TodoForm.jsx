import React from 'react'

import { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const changeHandler = ({target}) => {
    setInput(target.value);
  };

  const submitHandler = () => {
    addTodo(input);
    setInput("");
  };

  return (
    <div className="form">
      <input
      id='f_Input'
        className="form__input"
        type="text"
        value={input}
        onChange={changeHandler}
      />
      <button className="form__submit" onClick={submitHandler}>
        Add Todo
      </button>
    </div>
  );
};