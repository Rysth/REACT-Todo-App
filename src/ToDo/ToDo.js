import React from 'react';
import './ToDo.css';

function ToDo() {
  return (
    <div className="app">
      <div className="container">
        <div className="app-header">
          <h1 className="app-title">Todos</h1>
          <p className="app-text">Items will persist in the browser local storage</p>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
