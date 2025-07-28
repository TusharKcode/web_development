import { useEffect, useState } from "react";

function LiveClock(){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer)
    }, []);

    return(
        <div style={{textAlign: 'center', fontSize: '24px', marginTop: '50px'}}>
            <h2>Live Clock</h2>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default LiveClock;