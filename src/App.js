import { useEffect,useContext } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate/TaskCreate";
import TaskList from "./components/TaskList/TaskList";
import TaskContext from "./context/task";
function App() {
  const {fecthedTask} = useContext(TaskContext)
  useEffect(() => {
    fecthedTask();
  }, []);
  return (
    <div className="App">
      <TaskCreate  />
      <h1>Görevler</h1>
      <TaskList
      />
    </div>
  );
}

export default App;
