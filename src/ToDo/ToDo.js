import React, { useState } from 'react';
import ToDoHeader from './ToDoHeader';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import './ToDo.css';

function ToDo() {
  const [items, setItems] = useState(
    !JSON.parse(localStorage.getItem('taskArray')) ? [] : JSON.parse(localStorage.getItem('taskArray')),
  );

  return (
    <div className="app">
      <div className="container">
        <ToDoHeader />
        <ToDoForm setItems={setItems} />
        <ToDoList items={items} setItems={setItems} />
      </div>
    </div>
  );
}

export default ToDo;
