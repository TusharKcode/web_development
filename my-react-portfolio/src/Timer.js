// Storing Timer ID without DOM access

import { useRef, useState } from "react";

function Timer(){
    const[count, setCount] = useState(0);
    const intervalRef = useRef(null);

    function start(){
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => setCount(c => c+1), 1000);
        }
    }
    function stop() {
        clearInterval(intervalRef.current)
        intervalRef.current = null;
    }

    return(
        <div>
            <h2>Timer: {count}</h2>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </div>
    );
}

export default Timer;