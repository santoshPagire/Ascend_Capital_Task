import React from 'react';
import Task from './Task';
import './TaskList.css';

const TaskList = ({ title, tasks, onTaskDrop, onTaskComplete, onAddTask }) => {
  return (
    <div style={styles.taskList}>
      <h3>{title}</h3>
      <div onDrop={(e) => onTaskDrop(e, title)} onDragOver={(e) => e.preventDefault()}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onTaskComplete={onTaskComplete} />
        ))}
      </div>
      {title === 'Create New List' && (
        <div style={styles.addTaskContainer}>
          <span className="add-task-icon" onClick={onAddTask}>
            +
          </span>
        </div>
      )}
    </div>
  );
};

const styles = {
  taskList: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
    minWidth: '200px',
    backgroundColor: '#f9f9f9',
    position: 'relative', // Add position relative to the taskList
  },
  addTaskContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
    fontSize: '45px', // Adjust the font size as needed
  },
};

export default TaskList;
