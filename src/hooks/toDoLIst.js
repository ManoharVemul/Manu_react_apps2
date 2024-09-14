import React, { useState } from 'react'
import './abc.css'
function ToDo() {
  const [listu, setListu] = useState([]);
  const [inputu, setInputu] = useState("")

  const addHandler = () => {
    console.log(inputu)

    if (inputu.trim()) {
      setListu([...listu, inputu]);
      setInputu("");
    }}

  const deleteHandler = (index) => {
    const updateListu = listu.filter((e, ind) => ind !== index)
    setListu(updateListu)
  }
  const deleteAll = () => {
    setListu([])
  }
 

  return (<div>
    <input
      type="text"
      value={inputu}
      onChange={(e) => { setInputu(e.target.value) }} />
    <button onClick={addHandler}>Add</button>
    <button onClick={deleteAll} >DeleteAll</button>
    <ol>
      {listu.length > 0 ? (listu.map((each, index) => <li key={index}>{each} <button className="delete-btn" onClick={() => deleteHandler(index)}>Delete</button> </li>)) : (<p>No items to display</p>)}
    </ol></div>
  )
}

export default ToDo
