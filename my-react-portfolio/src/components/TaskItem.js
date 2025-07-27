function TaskItem({ task, onDelete, onToggle }){
    return(
        <li style={{
            textDecoration: task.completed ? "line-through" : "Done",
            color: task.completed ? "gray" : "black"
        }}>
            <span onClick={() => onToggle(task.id)} style={{cursor: "pointer"}}>
                {task.text}
            </span>
            <button onClick={() => onDelete(task.id)} style={{marginLeft: "10px"}}>
                Delete
            </button>
        </li>
    );
}

export default TaskItem;