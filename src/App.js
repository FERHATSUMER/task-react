import axios from 'axios';
import './App.css';
import TaskCreate from './components/TaskCreate/TaskCreate';
import TaskList from './components/TaskList/TaskList';
import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask =async (title, taskDesc) => {
const response=await axios.post('http://localhost:3000/tasks',{
  title,
  taskDesc
}) 

const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc,
      },
    ];
    setTasks(createdTasks);
  };

  const fecthedTask=async()=>{
    const response=await axios.get('http://localhost:3000/tasks')
    setTasks(response.data)
  }
  useEffect(()=>{
    fecthedTask()
  },[])

  const deleteTaskById =async (id) => {
    await axios.delete(`http://localhost:3000/tasks ${id}`)
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };
  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
  
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
