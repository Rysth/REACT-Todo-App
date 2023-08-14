import React from 'react';
import ToDoHeader from './ToDoHeader';
import ToDoForm from './ToDoForm';
import './ToDo.css';

function ToDo() {
  return (
    <div className="app">
      <div className="container">
        <ToDoHeader />
        <ToDoForm />
      </div>
    </div>
  );
}

export default ToDo;
