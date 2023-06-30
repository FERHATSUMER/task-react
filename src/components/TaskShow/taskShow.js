import { useState } from 'react';
import '../../Styles/TaskShow.css';
import '../../Styles/TaskShow.css';

import TaskCreate from '../TaskCreate/TaskCreate';
function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedTaskDesc);
  };

  console.log(task);
  return (
    <div className='task-show'>
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className='task-title'>Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className='task-title'>Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className='delete-btn' onClick={handleDeleteClick}>
              Sil
            </button>
            <button className='update-btn' onClick={handleEditClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default TaskShow;
