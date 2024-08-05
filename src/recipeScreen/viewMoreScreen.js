
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ViewMore() {
    const {viewrecipe,setViewrecipe} = useState([])
    
    useEffect(
        ()=>{
            fetcingrecipe() 
        }
    )

    const fetcingrecipe = async ()=>{
        try{
            const res = await axios.get("https://dummyjson.com/recipes");
            if(res.status===200){
                console.log(res.data)
                setViewrecipe(res.data.recipes)
    
            }else{
                console.log("hi, I AM ERROR")
            }
    }catch{}}

  return (
   <div>{
    viewrecipe.map(e=>e.name)
     
    }
  
   </div>
  )
}




