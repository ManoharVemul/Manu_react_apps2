import axios from "axios";
import { useEffect, useState } from "react";


const WetherUseEffect = ()=>{
    const [wether,setWether]=useState([]);
    // const 

useEffect(
    ()=>{
        handeler() 
    },[])


    const handeler = async ()=>{
        try {
           const response = await  axios.get("")
           if(response.status===200){
            console.log(response.data)
           }
        } catch (error) {
           console.log(error) 
        }
    }
    





    return(
        <>
        
        
        </>
    )
}

export default WetherUseEffect