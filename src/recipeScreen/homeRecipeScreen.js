import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navbar } from 'react-bootstrap';
import './recipe.css'
import Loader from '../loader/loader';

export default function HomeRecipeScreen() {
    const [recipeList, setRecipeList] = useState([])
    const [favourite, setFavourite] = useState([])

    useEffect(() => {
        responsefun()
    })
    const responsefun = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/recipes");
            if (response.status === 200) {
                console.log(response.data)
                setRecipeList(response.data.recipes)

            } else {
                console.log("hi, I AM ERROR")
            }


            // if()s
        } catch (err) { }
    }

    const viewmoreHandler = () => {

    }
    const favouriteHandler = () => {

    }


    return (
        <div className='g'>
          
            {recipeList.length>0 ?(
                recipeList.map((each) => {
                    return (<div key={each.id} className='recipe-card'>
                        <h3>{each.name}</h3>
                        <img src={each.image} width={200} height={200} alt={each.name}  />
                        <button onClick={viewmoreHandler}>view more</button>
                        <button onClick={favouriteHandler}>add favourite</button>

                    </div>)
                })) : <Loader/>
            }
        </div>
    )
}

