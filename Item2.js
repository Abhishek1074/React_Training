import React from 'react';


const Item2 = ({ task, onDelete }) => {
  return (
    <div>
      <span>{task}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};
export default Item2;
