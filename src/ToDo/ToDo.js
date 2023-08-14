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
        <form action="#" className="app-form">
          <div className="form-group">
            <label htmlFor="task" className="form-label">
              <input
                className="form-input"
                type="text"
                name="task"
                id="task"
                placeholder="Add task..."
              />
              <i className="fa-solid fa-circle-plus form-icon" />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToDo;
