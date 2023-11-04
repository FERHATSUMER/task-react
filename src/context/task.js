import axios from "axios";
import { Children, createContext, useEffect, useState } from "react";

const TaskContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);
  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      title,
      taskDesc,
    });

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
  const fecthedTask = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
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
  

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks ${id}`);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);

    const sharedValuesAndMethods = {
      tasks,
      createTask,
      editTaskById,
      deleteTaskById,
    };
    return <TaskContext.Provider value={sharedValuesAndMethods}>{children}</TaskContext.Provider>;
  };
}
export { Provider };
export default TaskContext;
