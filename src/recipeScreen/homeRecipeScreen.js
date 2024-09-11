import axios from 'axios'
import React, { useEffect, useState } from 'react'

import './recipe.css'
import Loader from '../loader/loader';
import RecipeNavBar from './recipeNavBar';
import { useNavigate, useParams } from 'react-router-dom';

export default function HomeRecipeScreen() {
    const navigate = useNavigate()
    
    
    const [recipeList, setRecipeList] = useState([])
    const [favourite, setFavourite] = useState([])

    useEffect(() => {
        responsefun()
    },[])
    
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


    // const viewmoreHandler = (ind) => {
    //     //setFavourite({indentity}) =useParams(ind)
    //     console.log('View more for recipe index:', ind);
    // }
    const favouriteHandler = (indi) => {
        window.href("/favourite");
        console.log('View more for recipe index:', indi);
        // setFavourite("")
    }
    // const goTofavoriteHandler = () =>{
        
    // }

    return (<>
   <RecipeNavBar/>
        <div className='g'>
          
            {recipeList.length>0 ?(
                recipeList.map((each,index) => {
                    return (<div key={each.id} className='recipe-card'>
                        <h3>{each.name}</h3>
                        <img src={each.image} width={200} height={200} alt={each.name}  />
                        <button onClick={()=>{navigate(`/viewmore/${each.id}`)}}>view more</button>
                        <button onClick={()=>{favouriteHandler(index)}}>add favourite</button>
                        <button onClick= {()=>{navigate(`/favourite/${each.id}`)}}> Go to Favorite</button>
                       { <favourite/>}
                    </div>)
                })) : <Loader/>
            }
        </div></>
    )
}


