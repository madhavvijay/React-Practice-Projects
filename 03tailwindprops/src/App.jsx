import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card.jsx'

function App() {
  let myObj = {
    name: "Madhav",
    age: 22
  }
  return (
    <>
      <h1 className='bg-yellow-600 text-black p-4 rounded-xl mb-4'> Tailwind css</h1>
      <Card name="bottlers Arsenal" btnText="Click Me" />
      <Card name={myObj.name} btnText="Vist Me" />
      <Card />
    </>
  )
}

export default App
