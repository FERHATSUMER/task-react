import './App.css';
import TaskCreate from './components/TaskCreate/TaskCreate';
import TaskList from './components/TaskList/TaskList';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, taskDec) => {
    const createdTask = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDec,
      },
    ];
    setTasks(createdTask);
  };
  const deleteTaskById = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };
  return (
    <div className='App'>
      <TaskCreate oncreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} />
    </div>
  );
}

export default App;
