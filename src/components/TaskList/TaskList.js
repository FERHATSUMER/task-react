import TaskShow from '../TaskShow/TaskShow';

function TaskList({ tasks }) {
    return (
    <div className='task-list'>
{tasks.map((task,index)=>{
    return <TaskShow key={index} task={task}   />
})}    
    </div> );
}

export default TaskList;