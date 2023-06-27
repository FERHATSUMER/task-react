import './App.css';
import TaskCreate from './components/TaskCreate/TaskCreate';
import TaskList from './components/TaskList/TaskList';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, taskDec) => {
    const createdTask = [...tasks, {
      id: Math.round(Math.random() * 999999),
      title,
      taskDec
    }];
    setTasks(createdTask);
  };
  return (
    <div className='App'>
      <TaskCreate oncreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
