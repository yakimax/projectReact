import React, { useState } from 'react'

function Test(){
    // const [count , setCount] = useState(0) ;
    const [text , setText] = useState('') ;
    const [Arr , setArr] = useState([]) ;
    return (
      <div>
        {/* <h1>this is counter {count}</h1>
        <button onClick={()=> setCount(count+1)}>+1</button>
        <button onClick={()=> setCount(count-1)}>-1</button> */}
        {/* <input type = 'text' onChange={(e)=>setText(e.target.value)}></input>
        <h1 >our string is {text}</h1> */}
        <input type = 'text' value = {text} onChange={(e)=>setText(e.target.value)}></input>
        <button onClick={()=>{setArr([...Arr,text]); setText('')}}> add </button>
        <ul>
            {
                Arr.map((text)=>(
                    <li >{text}</li>
                )) 
            }
        </ul>
      </div>
    )
}

export default Test