import TaskShow from '../TaskShow/taskShow';
function TaskList({ tasks }) {
    return (
    <div>
    {tasks.map((tasks,index)=>{
        return (<TaskShow key={index} tasks={tasks} />)
    })}
    </div> );
}

export default TaskList;