import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);
  // let counter = 5;

  const addValue = () => {
    counter += 1;
    setCounter(counter)
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>couter value : {counter}</h2>
      <button
        onClick={addValue}>Increment</button>
      <br />
      <button>Decrement</button>
    </>
  )
}

export default App
