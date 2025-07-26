function greet({name}){
    return(
        <div>
            <h2>Hello, {name}</h2>
            <p>This is greeting component using destructured props.</p>
        </div>
    );
}

export default greet;