import React from 'react';
import PropTypes from 'prop-types';

function ToDoItem({ text, handleDelete }) {
  return (
    <li className="list-item">
      <input className="item-checkbox" type="checkbox" />
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

ToDoItem.defaultProps = {
  text: '',
};

ToDoItem.propTypes = {
  text: PropTypes.string,
  handleDelete: PropTypes.func.isRequired,
};

export default ToDoItem;
