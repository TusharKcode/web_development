function ClickEvent(){
    function handleClick(){
        alert("You Clicked the button!");
    }

    return(
        <div>
            <h2>Click Event Example</h2>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default ClickEvent;