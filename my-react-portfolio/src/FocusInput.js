// Referencing the DOM element
import { useRef } from "react";

function FocusInput(){
    const inputRef = useRef(null);

    function handleClick(){
        inputRef.current.focus(); // Access the Input DOM node and call .focus()
    }

    return(
        <div>
            <input ref={inputRef} type="text" placeholder="Click Button to focus me" />
            <button onClick={handleClick}>Focus Button</button>
        </div>
    );
}

export default FocusInput;