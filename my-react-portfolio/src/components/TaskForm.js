import { useState } from "react";

function TaskForm({ onAdd }){
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.trim() === "") return;

        onAdd(input);       // Send task text to app
        setInput("");       // clear input field
    };

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Add new task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default TaskForm;