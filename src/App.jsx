import { useState } from 'react'
import React from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username : "hero",
    age:25
  }

  let newArray = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
       
      <Card username="coffee with react" newObj={myObj} array={newArray} />

      <Card username="Sandhyarani" btntext="click Me"/>
    </>
  )
}

export default App