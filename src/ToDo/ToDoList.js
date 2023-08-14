import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

function ToDoList({ items, setItems }) {
  const handleDelete = (ID) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== ID);
      return updatedItems;
    });
  };

  const handleCheckStatus = (ID) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id === ID) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
      return updatedItems;
    });
  };

  useEffect(() => {}, [items]);

  return (
    <ul className="app-list">
      {items.map((item) => (
        <ToDoItem
          key={item.id}
          completed={item.completed}
          text={item.text}
          handleCheck={() => {
            handleCheckStatus(item.id);
          }}
          handleDelete={() => {
            handleDelete(item.id);
          }}
        />
      ))}
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
  setItems: PropTypes.func.isRequired,
};

export default ToDoList;
