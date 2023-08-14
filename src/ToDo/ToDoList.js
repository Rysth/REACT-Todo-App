import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

function ToDoList({ items }) {
  return (
    <ul className="app-list">
      {items ? items.map((item) => <ToDoItem key={item.id} text={item.text} />) : ''}
    </ul>
  );
}

ToDoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ToDoList;
