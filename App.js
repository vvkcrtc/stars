import './App.css';
import Stars from "./Stars.js";

function App() {
  return (
    <div className="App">
      <Stars count={0} />
      <Stars count={1} />
      <Stars count={2} />
      <Stars count={3} />
      <Stars count={4} />
      <Stars count={5} />
      <Stars count={6} />
    </div>
  );
}

export default App;
