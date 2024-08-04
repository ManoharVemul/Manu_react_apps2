import { useState } from "react"
import './sqr.css'

const SqrBlock =()=>{
    const [block,setBlock] = useState([])
    const addu =()=>{
        const addNew = [...block,1]
        setBlock(addNew)
    }
    const removing =()=>{
        const removeNew = []
        setBlock(removeNew)
    }
    const deleteHandler = (index)=>{
        const filtering = block.filter((_,ind)=>ind !== index)
        setBlock(filtering)
    }

    return(
        <>
        <button onClick={addu}>ADD</button>
        <button onClick={removing}>Deleta All </button><br/><br/><br/>
        <div className="sqre">
            {block.map((each,index)=>{
                return(
                <div key = {index} className={(index+1)%2===0 ? "even":"odd"}>
                <h1> I am {index+1} BLOCK <br/></h1>
                <button onClick={()=>deleteHandler(index)}>Delete </button>

                </div>
                )
            })}
        </div>
        
        </>
    )
}

export default SqrBlock