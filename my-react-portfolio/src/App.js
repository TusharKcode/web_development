import Welcome from "./welcome";
import Greet from "./greet";
function App(){
  return(
    <div>
      <h1>React Learning</h1>
      <Welcome />
      <Greet name="Tushar" />
      <Greet name="Alex" />
    </div>
  );
}

export default App;