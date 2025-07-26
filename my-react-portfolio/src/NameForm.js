import { useState } from "react";

function NameForm(){
    const [name, setName] = useState("");
    return(
        <div>
            <h2>Hello, {name || "Stranger"}</h2>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}

            />
        </div>
    );
}

export default NameForm;