import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */
function ToDoItem({ completed, text, handleDelete, handleCheck }) {
  /* eslint-enable */
  return (
    <li className="list-item">
      <input className="item-checkbox" type="checkbox" onChange={handleCheck} checked={completed} />
      <p className="item-task">{text}</p>
      <button type="button" className="item-button edit">
        <i className="fa-solid fa-edit" />
      </button>
      <button type="button" className="item-button delete" onClick={handleDelete}>
        <i className="fa-solid fa-trash" />
      </button>
    </li>
  );
}

ToDoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired,
};

export default ToDoItem;
