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
        <ul className="app-list">
          <li className="list-item">
            <input className="item-checkbox" type="checkbox" name="#" id="#" />
            <p className="item-task">Lorem ipsum dolor sit amet.</p>
            <button type="button" className="item-button edit">
              <i className="fa-solid fa-edit" />
            </button>
            <button type="button" className="item-button delete">
              <i className="fa-solid fa-trash" />
            </button>
          </li>
          <li className="list-item">
            <input className="item-checkbox" type="checkbox" name="#" id="#" />
            <p className="item-task">Lorem ipsum dolor sit amet.</p>
            <button type="button" className="item-button edit">
              <i className="fa-solid fa-edit" />
            </button>
            <button type="button" className="item-button delete">
              <i className="fa-solid fa-trash" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ToDo;
