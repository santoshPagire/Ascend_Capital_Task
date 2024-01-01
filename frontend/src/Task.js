// Task.js
import React, { useState } from 'react';
import './Task.css';

const Task = ({ task, onTaskComplete }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    // You can also pass the task ID to onTaskComplete if needed
    onTaskComplete(task.id);
  };

  const handleDragStart = (e) => {
    // Prevent dragging when interacting with the checkbox
    if (e.target.tagName.toLowerCase() !== 'input') {
      e.dataTransfer.setData('text/plain', JSON.stringify(task));
    }
  };

  return (
    <div
      style={styles.task}
      draggable
      onDragStart={handleDragStart}
    >
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      <span>{task.text}</span>
    </div>
  );
};

const styles = {
  task: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '3px',
    padding: '8px',
    margin: '5px',
    backgroundColor: '#fff',
    cursor: 'move',
  },
};

export default Task;
