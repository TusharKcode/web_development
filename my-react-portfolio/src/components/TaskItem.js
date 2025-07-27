function TaskItem({ task, onDelete, onToggle }){
    return(
        <div 
        className={`task-item ${task.completed ? "completed" : ""}`}
         onClick={() => onToggle(task.id)}
        >
            <span>
                {task.text}
            </span>
            <button onClick={(e) => { e.stopPropagation(); onDelete(task.id);}}>
                Delete
            </button>
        </div>
    );
}

export default TaskItem;