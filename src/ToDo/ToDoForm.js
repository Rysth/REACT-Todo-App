import { useState } from 'react';

function ToDoForm() {
  const [task, setTask] = useState('');

  const isEmpty = (string) => string === '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmpty(task)) {
      setTask('');
      e.target.reset();
    }
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="app-form">
      <div className="form-group">
        <label htmlFor="task" className="form-label">
          <input
            className="form-input"
            type="text"
            name="task"
            id="task"
            onChange={handleChange}
            placeholder="Add task..."
          />
        </label>
      </div>
      <div className="form-group">
        <button className="form-icon" type="submit">
          <i className="fa-solid fa-circle-plus" />
        </button>
      </div>
    </form>
  );
}

export default ToDoForm;
