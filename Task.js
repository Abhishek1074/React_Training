import React, { useState } from 'react';
import Form2 from './Form2';
import List2 from './List2';


function Task() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Form2 onAdd={handleAddTask} />
      <List2 tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
}

export default Task;