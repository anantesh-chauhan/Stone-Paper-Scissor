import React, { useState } from 'react'

export default function Numbers() {
    const [num ,newNum] =useState(0);

    const [type,newType]=useState("Even");

    const [ne,nne]=useState(0);

    const [no,nno]=useState(0);

    const random =() =>{
        let x=Math.random()*10 +1 ;
        x=Math.floor(x);
        if(x%2==0){
            newType("Even");
            nne(ne+1);
        }
        else{
            newType("Odd");
            nno(no+1);
        }
        newNum(x);
    }

    const clear = ()=>{
        newNum(0);
        newType("Even")
        nne(0);
        nno(0);
    }
  return (
    <div>
       <h1>Get Random Numbers from 1 to 10</h1>
        <h3>Number is : {num}</h3>
        <h3>Number is : {type}</h3>

        <h2>Number of Even : {ne}</h2>
        <h2>Number of Odd : {no}</h2>
       <button onClick={random} className='container my-2' >Click</button>
       
       <button onClick={clear} className='container my-2'  >Clear</button>
    </div>
  )
}
