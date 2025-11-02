import { useState } from "react";
import "./App.css";
import CountBox from "./components/CountBox";
import counterStore from "./stores/counterStore";

function App() {
  // const [count, setCount] = useState(0)
  const { count, increase, increaseBy, decrease, decreaseBy } = counterStore();

  return (
    <div>
      <h1>count:{count}</h1>

      <div>
        <button onClick={increase}>increase</button>
        <button onClick={() => increaseBy(10)}>10씩 증가 </button>
      </div>

      <div>
        <button onClick={decrease}>decrease</button>
        <button onClick={() => decreaseBy(10)}>10씩 감소 </button>
      </div>
      
      <CountBox />
    </div>
  );
}

export default App;
