const { useState } = require("react");

function Counter(){

    //use State hook
    const [count, setCount] = useState(0);

    //UI
    return(
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;