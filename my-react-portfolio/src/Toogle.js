import { useState } from "react";

function Toogle(){
    const [isVisible, setIsVisible] = useState(true);

    return(
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide message" : "Show message"}
            </button>
            {isVisible && <p>This is Toggle message!</p>}
        </div>
    );
}
export default Toogle;