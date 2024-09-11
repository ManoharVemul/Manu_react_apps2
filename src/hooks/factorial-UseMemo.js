import React, { useMemo, useState } from 'react'

function Fact() {
const [number,setNumber] = useState(1)
function factorial (n){
if (n<=1) return 1;
return n*factorial(n-1);
}
const fact = useMemo(()=>factorial(),[number])
const incrt = (num)=>{setNumber(num+1)}
  return (
    <>
      <button onClick ={()=>{incrt(number)}}> add num</button>
      <h1>the factorial of {number} is {fact} </h1>
    </>
  )
}

export default Fact
