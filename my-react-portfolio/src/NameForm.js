import { useState } from "react";

function NameForm(){
    const [name, setName] = useState("");

    function handleChange(event){
        setName(event.target.value);     // dynamically update input value
    }

    function handleSubmit(e){
        e.preventDefault();
        alert(`Submitted name: ${name}`)
    }
    return(
        <div>
            <h2>Enter your name: </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
            <p>Hello, <strong>{name}</strong></p>
        </div>
    );
}

export default NameForm;