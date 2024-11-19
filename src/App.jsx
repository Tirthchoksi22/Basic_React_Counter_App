import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]=useState(0)

  function Countup(){
    if(counter >= 20){
      setCounter(20)
      alert("Can't Increase further")
    }
    else{
    counter= counter + 1
    setCounter(counter)
    }
  }
  function Countdown(){
    if (counter <=0){
      setCounter(0)
      alert("Can't Decrease further ")
    }else{
    counter = counter - 1
    setCounter(counter)
    }
  }
  return (
    <>
      <h1>React</h1>
      <h2>Counter Value:{counter}</h2>
      <div className='buttons'>
      <button onClick={Countup}>Count Up</button>
      <br/>
      <button onClick={Countdown}>Count Down</button>
      </div>
    </>
  )
}

export default App
