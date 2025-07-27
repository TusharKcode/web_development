import {useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App(){
  const [tasks, setTasks] = useState([]);

  // Add new Tasks
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    };
    setTasks([newTask, ...tasks]);
  };

  // Delete Tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toogle complete
  const toogleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
    ));
  };

  return(
    <div className="App">
      <h2>React Task Manager</h2>
      <TaskForm onAdd={addTask} />
      <TaskList 
        tasks={tasks}
        onDelete={deleteTask}      
        onToogle={toogleTask}
      />
    </div>
  );
}

export default App;