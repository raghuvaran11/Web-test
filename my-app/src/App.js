import React,{useState} from 'react'

const App = ()=>{
  const [count,setCount]=useState(0)
  const increamentCountValue=()=>{
    setCount(count+1)
  }
  const decreamentCountValue = ()=>{
    setCount(count-1)
  }

  return (
    <>
    <h1>{count}</h1>
    <button onClick={increamentCountValue}>Increament</button>
      <button onClick={decreamentCountValue}>Decreament</button>
    </>
  );
}

export default App;
