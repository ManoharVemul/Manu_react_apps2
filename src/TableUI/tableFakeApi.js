import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import Loader from '../loader/loader'
//import { toast } from 'react-toastify'
//import '../hooks/table.css'
import './table.css'

// export default function TableFakeApi() {
//     const [table, setTable] = useState([])
//     useEffect(() => { fetching() }, [])

//     const fetching = async () => {
//         try {

//             const res = await axios.get("https://fakestoreapi.com/products")
//             if (res.status === 200) {
//                 setTable(res.data.map(each => { return ({ ...each, quantity: 1 }) }))
//                 console.log(res)
//             }

//         } catch (err) {
//             console.log(err)
//         }
//     }

//     const decreaseHandler = (targetId) => {
//         const updatedDDQuantity = table.map(each => {
//             if (targetId === each.id) {
//                 if (each.quantity > 0) {
//                     return { ...each, quantity: each.quantity - 1 }
//                 } else {
//                     return { ...each, quantity: 0 }
//                 }

//             } else {
//                 return each
//             }
//         })
//         setTable(updatedDDQuantity)

//     }
//     const increaseHandler = (targetId) => {
//         const updatedIIQuantity = table.map(each => {
//             if (targetId === each.id) {
//                 return { ...each, quantity: each.quantity + 1 }
//             } else {
//                 return each
//             }
//         })
//         setTable(updatedIIQuantity)
//     }
// const removeHandler = (id)=>{
//     const updatedTable = table.filter(each=>id!==each.id)
//     setTable(updatedTable)
// }




//     return (
//         <div  className="table-container">
//             <h1>Total :  {Math.floor(table.reduce((eachTotal, each) => (eachTotal + each.quantity * each.price), 0)) > 0 ? Math.floor(table.reduce((eachTotal, each) => (eachTotal + each.quantity * each.price), 0)) : 0}</h1>

//             <Table striped bordered hover className="table">
//                 <thead>
//                     <tr>
//                         <td>S no</td>
//                         <td>image</td>
//                         <td>name</td>
//                         <td>categery</td>
//                         <td>add cart</td>
//                         <td>total</td>
//                         <td> delete </td>
//                     </tr>
//                 </thead>
//                 <tbody>


//                     {table.length > 0 ? (table.map((each =>

//                         <tr key={each.id}>
//                             <td>{each.id}</td>
//                             <td><img src={each.image} alt={""} width={150} height={150} /></td>
//                             <td>{each.title}</td>
//                             <td>{each.categery}</td>
//                             <td><><button onClick={() => decreaseHandler(each.id)}>--</button>{each.quantity > 0 ? Math.floor(each.quantity) : 0}

//                                 <button onClick={() => increaseHandler(each.id)}>++</button>

//                             </></td>
//                             <td>{each.price}</td>
//                             <td>{each.quantity > 0 ? Math.floor(each.quantity * each.price) : 0}</td>
//                             <td>
//                                 <button onClick = {()=>removeHandler(each.id)} style = {{color:"red"}}> Delete </button>
//                             </td>

//                         </tr>
//                     ))) : <Loader />

//                     }

//                 </tbody>
//             </Table>

//         </div>
//     )
// }







export default function TableFakeApi() {
    const [table, setTable] = useState([])
    useEffect(() => { fetching() }, [])

    const fetching = async () => {
        try {
            const res = await axios.get("https://fakestoreapi.com/products")
            if (res.status === 200) {
                setTable(res.data.map(each => { return ({ ...each, quantity: 1 }) }))
                console.log(res)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const decreaseHandler = (targetId) => {
        const updatedDDQuantity = table.map(each => {
            if (targetId === each.id) {
                if (each.quantity > 0) {
                    return { ...each, quantity: each.quantity - 1 }
                } else {
                    return { ...each, quantity: 0 }
                }
            } else {
                return each
            }
        })
        setTable(updatedDDQuantity)
    }

    const increaseHandler = (targetId) => {
        const updatedIIQuantity = table.map(each => {
            if (targetId === each.id) {
                return { ...each, quantity: each.quantity + 1 }
            } else {
                return each
            }
        })
        setTable(updatedIIQuantity)
    }

    const removeHandler = (id) => {
        const updatedTable = table.filter(each => id !== each.id)
        setTable(updatedTable)
    }
    // table && table.legth
    return (<>
        <div className="table-container">{1 > 0 ?
         <>
              <h1>Total: {Math.floor(table.reduce((eachTotal, each) => (eachTotal + each.quantity * each.price), 0)) > 0 ? Math.floor(table.reduce((eachTotal, each) => (eachTotal + each.quantity * each.price), 0)) : 0}</h1>

            <Table striped bordered hover className="table">
                <thead>
                    <tr>
                        <th>S no</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Add to Cart</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>{
                     table.map((each) =>{

                       return(<tr key={each.id}>
                            <td>{each.id}</td>
                            <td><img src={each.image} alt="" width={150} height={150} /></td>
                            <td>{each.title}</td>
                            <td>{each.category}</td>
                            <td>
                                <button onClick={() => decreaseHandler(each.id)}>-</button>
                                {each.quantity > 0 ? Math.floor(each.quantity) : 0}
                                <button onClick={() => increaseHandler(each.id)}>+</button>
                            </td>
                            <td>{each.price}</td>
                            <td>{each.quantity > 0 ? Math.floor(each.quantity * each.price) : 0}</td>
                            <td>
                                <button onClick={() => removeHandler(each.id)} className="delete">Delete</button>
                            </td>
                        </tr>)})} 
                </tbody>
            </Table></>: <Loader className="loader" />
 } </div></>
    )
}

