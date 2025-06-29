import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(0)
  const handleInput=(sign)=>{
    setCount((previousCount)=>(sign==='+'?previousCount+1:previousCount-1))
  }
  return (
    <>
    <h1>Counter App</h1>
    <div>
      <h2>Count : {count}</h2>
      <button onClick={()=>(handleInput('+'))}>Increment</button>
      <button onClick={()=>(handleInput('-'))}>Decrement</button>
    </div>
    </>
  );
}

export default App;
