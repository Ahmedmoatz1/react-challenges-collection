import React, { useRef, useState } from 'react'

function Counter() {
    const [countera , setcountera] = useState(0);
    const counterref = useRef(0)
    function HandleAddref(){
        counterref.current = counterref.current +1
    }
    
    function HandleAdd(){
        setcountera(()=> countera +1)
    }
    function Handledecremented(){
        setcountera(()=> countera -1)
    }
    function Handledecrementedref(){
        counterref.current =  counterref.current -1
    }
  return (
    <div>
      <h1>{countera}</h1>
      <button onClick={HandleAdd}>add</button>
      <button onClick={Handledecremented}>decremented</button>
        <br />
        <h1>{counterref.current}</h1>
        <button onClick={HandleAddref}>add</button>
        <button onClick={Handledecrementedref}>decremented</button>
    </div>
  )
}

export default Counter
