import { useState } from 'react';
import PropTypes from 'prop-types';

function ToDoForm({ setItems }) {
  const [task, setTask] = useState('');

  const isEmpty = (string) => string === '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmpty(task)) {
      setItems((prevItems) => [
        ...prevItems,
        {
          id: prevItems.length,
          text: task,
          completed: false,
        },
      ]);

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
        <button className="form-icon" type="submit">
          <i className="fa-solid fa-circle-plus" />
        </button>
      </div>
    </form>
  );
}

ToDoForm.defaultProps = {
  setItems: () => {},
};

ToDoForm.propTypes = {
  setItems: PropTypes.func,
};

export default ToDoForm;
