// Dashboard.js
import React, { useEffect, useState } from 'react';
import TaskList from './TaskList';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import {Card,CardBody} from "reactstrap"; 


const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Sent an Email to company', list: 'List 1' },
    { id: 2, text: 'Create new assignment', list: 'List 1' },
    { id: 3, text: 'Need to talk with Rajesh', list: 'List 1' },
    { id: 4, text: 'Buy some goods', list: 'List 1' },
    { id: 5, text: 'Reading Books', list: 'List 2' },
    { id: 6, text: 'Playing cricket', list: 'List 2' },
    { id: 7, text: 'Visit College Tomorrow', list: 'List 2' },
    { id: 8, text: 'Test Task 1', list: 'List 3' },
    { id: 9, text: 'Test Task 2', list: 'List 3' },
  ]);

  const onTaskDrop = (e, newList) => {
    e.preventDefault();
    const droppedTask = JSON.parse(e.dataTransfer.getData('text/plain'));
    const updatedTasks = tasks.map((task) =>
      task.id === droppedTask.id ? { ...task, list: newList } : task
    );
    setTasks(updatedTasks);
  };

  // const onTaskComplete = (taskId) => {
  //   const updatedTasks = tasks.filter((task) => task.id !== taskId);
  //   setTasks(updatedTasks);
  // };

  const onTaskComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const onAddTask = () => {
    const newTask = {
      id: tasks.length + 1,
      text: 'New Task', // You can set a default text for the new task
      list: 'Create New List', // or you can dynamically set the list name
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  const[data,setData]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:8081/login')
        .then(res =>res.json())
        .then(data=>setData(data))
        .catch(err=>console.log(err));
    },[])

  return (
    <div>
      <Card style={{ width: '65rem'}} className="my-0 align-items-center ">
      <CardBody>
        {data.map(d=>(
        <h2>Welcome, {d.name}!</h2>
        ))} 
        
      <div style={styles.headerContainer}>
        
        <Link to ='/' style={styles.logoutButton}className="btn btn-success bg-light text-decoration-none "><strong>Logout</strong></Link>
      </div>
      <div style={styles.taskListsContainer}>
        <TaskList
          title="List 1"
          tasks={tasks.filter((task) => task.list === 'List 1')}
          onTaskDrop={onTaskDrop}
          onTaskComplete={onTaskComplete}
        />
        <TaskList
          title="List 2"
          tasks={tasks.filter((task) => task.list === 'List 2')}
          onTaskDrop={onTaskDrop}
          onTaskComplete={onTaskComplete}
        />
        <TaskList
          title="List 3"
          tasks={tasks.filter((task) => task.list === 'List 3')}
          onTaskDrop={onTaskDrop}
          onTaskComplete={onTaskComplete}
        />
        <TaskList
          title="Create New List"
          tasks={tasks.filter((task) => task.list === 'Create New List')}
          onTaskDrop={onTaskDrop}
          onTaskComplete={onTaskComplete}
          onAddTask={onAddTask}
        />
        
      </div>
      </CardBody>
        </Card>
    </div>
  );
};

const styles = {
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  logoutButton: {
      color:'blue', 
    marginLeft: '800px', 
  },
  taskListsContainer: {
    display: 'flex',
    overflowX: 'auto',
  },
};

export default Dashboard;
