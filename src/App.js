import './App.css';
import TaskCreate from './components/TaskCreate/TaskCreate';
import TaskList from './components/TaskList/TaskList';

function App() {
  const createTask=(title, taskDec)=>{
console.log(title, taskDec)
  }
  return (
    <div className="App">
    <TaskCreate oncreate={createTask}/>
    <h1>Görevler</h1>
    <TaskList /> 
    </div>
  );
}

export default App;
