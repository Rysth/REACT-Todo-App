import React, { useEffect, useState } from 'react';
import ToDoHeader from './ToDoHeader';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import './ToDo.css';

function ToDo() {
  const [items, setItems] = useState([]);
  useEffect(() => {}, [items]);

  return (
    <div className="app">
      <div className="container">
        <ToDoHeader />
        <ToDoForm setItems={setItems} />
        <ToDoList items={items} />
      </div>
    </div>
  );
}

export default ToDo;
