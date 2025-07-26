function App(){
  const name = "Tushar";
  const year = new Date().getFullYear();

  return(
    <div>
      <h1>Hello, {name}</h1>
      <p>Year: {year}</p>
    </div>
  );
}

export default App;