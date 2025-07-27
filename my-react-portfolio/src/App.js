import GreetUs from "./GreetUs"
import Counter from "./Counter";
function App(){
  return(
    <>
      <GreetUs name="Tushar" />
      <GreetUs name="Amit" />
      <GreetUs name="Alex" />

      <Counter />
  </>
  );
  
}

export default App;