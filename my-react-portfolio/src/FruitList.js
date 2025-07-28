function FruitList(){
    const fruits = ["apple", "cherry", "banana"]

    return(
        <ul>
            {fruits.map((fruits, index) => (
                <li key={index}>{fruits}</li>
            ))}
        </ul>
    );
}

export default FruitList;