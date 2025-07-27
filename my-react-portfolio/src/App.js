import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function Home(){
  return <h2>Welcome to the home page</h2>
}

function About(){
  return <h2>About this project</h2>
}

function Contact(){
  return <h2>Contact Us</h2>
}

function TaskManager(){
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
    <>
      <h2>React Task Manager</h2>
      <TaskForm onAdd={addTask} />
      <TaskList 
        tasks={tasks}
        onDelete={deleteTask}      
        onToogle={toogleTask}
      />
    </>
  );
}

function App(){
  return(
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link> | {""}
          <Link to="/task">Task Manager</Link> | {""}
          <Link to="/about">About</Link> | {""}
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task" element={<TaskManager />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;