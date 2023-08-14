import React from 'react';

function ToDoHeader() {
  return (
    <div className="app-header">
      <h1 className="app-title">Todos</h1>
      <p className="app-text">Items will persist in the browser local storage</p>
    </div>
  );
}

export default ToDoHeader;
