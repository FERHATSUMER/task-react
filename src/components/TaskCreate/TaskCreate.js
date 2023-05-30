import { useState } from 'react';
import '../../Styles/TaskCreate.css';

function TaskCreate() {
  const [title, setTitle] = useState('');
  const [taskDec, setTaskDec] = useState('');


  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const hanleTaskChange = (event) => {
    setTaskDec(event.target.value);
  };
 
  const handleSubmit=(event)=>{
event.preventDefault()
  }

  return (
    <div className='task-create'>
      <h3>Lütfen Task Ekleyiniz</h3>
      <form className='task-form'>
        <label className='task-label'>Başlık</label>
        <input className='task-input' value={title} onChange={handleChange} />
        <label className='task-label'>Task Giriniz</label>
        <textarea
          className='task-input'
          rows={5}
          value={taskDec}
          onChange={hanleTaskChange}
        />
        <button className='task-button'
        onClick={handleSubmit}
        >Oluştur</button>
      </form>
    </div>
  );
}

export default TaskCreate;
