import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import CustomList from "../customList"
import  {Table}  from "react-bootstrap"
import './table.css'

const RecipeUseEffect = () => {
    const [listu, setListu] = useState([])
    useEffect(() => {
        fetchingRecipe()
    }, []
    )
    const fetchingRecipe = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/recipes")
            console.log(response.data.recipes);
            if (response.status === 200) {
                setListu(response.data.recipes);
            }
        } catch (error) {

        }
    }
 const removeHandler= (index)=>{
    const updatedRes = listu.filter((_,indi)=>indi!==index)
    setListu(updatedRes)
 }


 const adding = () => {
    const newList =[...listu, {
        id: 31,
        name: "Classic Margherita Pizza",
        ingredients: [
            "Pizza dough",
            "Tomato sauce",
            "Fresh mozzarella cheese",
            "Fresh basil leaves",
            "Olive oil",
            "Salt and pepper to taste",
        ],
        instructions: [
            "Preheat the oven to 475°F (245°C).",
            "Roll out the pizza dough and spread tomato sauce evenly.",
            "Top with slices of fresh mozzarella and fresh basil leaves.",
            "Drizzle with olive oil and season with salt and pepper.",
            "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
            "Slice and serve hot.",
        ],

    }]
    setListu(newList)
}

const removeAll = () => {
    const removeData = []
    setListu(removeData)
}


    return (
        <>
            {/* <h1>{"manohar"}</h1> */}
            <div style={{display:"block"}}>
            <button onClick={adding}>add recipe</button>
            <button onClick={removeAll}>Delete All</button>
            </div><br/>
            <Table striped bordered hover className="mt-4 custom-table" style={{display:"block"}}>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Ingredients</th>
                        <th>Instructions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {listu.map((eachRes, index) =>
                        <tr key={eachRes.id}>
                            <td>{index + 1}</td>
                            <td>{eachRes.name} </td>
                            <td>
                                <CustomList list={eachRes.ingredients} />
                            </td>
                            <td>
                                <CustomList list={eachRes.instructions} />
                            </td>
                            <td>
                                <button onClick={() => removeHandler(index)}>Delete</button>
                            </td>
                        </tr>

                    )} </tbody>
            </Table>

        </>
    )
}
export default RecipeUseEffect