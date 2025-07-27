const { useState } = require("react");

function Counter(){

    //use State hook
    const [count, setCount] = useState(0);

    //UI
    return(
        <div style={{marginTop: "20px"}}>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)} style={{marginTop: "10px"}}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;