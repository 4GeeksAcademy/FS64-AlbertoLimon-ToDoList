import React from 'react';
import { useState } from 'react';

export const TodoSearch = ({ todos }) => {
    const [search, setSearch] = useState('');
  
    const handleSearchChange = ({target}) => {
      setSearch(target.value);
    };
  
    const filteredTodos = todos.filter(todo =>
      todo.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div className="search__container">
        <input
          className="search__input"
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
       {search && (<ul className="search__list">
          {filteredTodos.map((todo,index) => (
            <li key={index} className="search__item">{todo}</li>
          ))}
        </ul>
       )}
      </div>
    );
  };