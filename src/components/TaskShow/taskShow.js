import { useState } from 'react';
import '../../Styles/TaskShow.css';
import TaskCreate from '../TaskCreate/TaskCreate';

function TaskShow({ task, onDelete }) {
  const { showEdit, setShowEdit } = useState(false);
  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  const handlEditClick = () => {
    setShowEdit(true);
  };
  return (
    <div className='task-show'>
      {showEdit ? (
        <TaskCreate task={task} />
      ) : (
        <div>
          <h3 className='task-title'>Görevleriniz</h3>
          <p>{task.title}</p>
          <h3 className='task-title'>Yapılacaklar</h3>
          <p>{task.taskDec}</p>
          <div>
            <button className='delete-btn' onClick={handleDeleteClick}>
              Sil
            </button>
            <button className='update-btn' onClick={handlEditClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
