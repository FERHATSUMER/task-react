import TaskShow from '../TaskShow/TaskShow';
import '../../Styles/TaskList.css';
import { useContext } from 'react';
import TaskContext from '../../context/task';
function TaskList() {
  const { tasks } = useContext(TaskContext);
    return (
      <div className="task-list">
        {tasks.map((task, index) => {
          return (
            <TaskShow
              key={index}
              task={task}
            />
          );
        })}
      </div>
    );
  }

export default TaskList;