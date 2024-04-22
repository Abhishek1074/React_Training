import React from 'react';
import Item2 from './Item2';

const List2 = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Item2 key={index} task={task} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};

export default List2;