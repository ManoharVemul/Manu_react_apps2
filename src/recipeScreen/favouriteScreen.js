// import React, { useEffect } from 'react'
// //import RecipeNavBar from './recipeNavBar'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'

// export default function FavouriteRecipe() {
// const {indi} = useParams()
// useEffect(()=>{
//   fetchingFav(indi)
// })
//   const fetchingFav = async (inde)=>{
//     try {
//       const res = await axios.get(`https://dummyjson.com/recipes/${inde}`);
//     if(res.status===200){
//       if(indi===inde){
//         console.log("manumanu")
//       }
//       console.log(res)
//       console.log(res.data.recipes)
      
//     }  
//     } catch (error) {
      
//     }
  

//   }
//   return (
//     <div>
     


//     </div>
//   )
// }



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';

// export default function FavouriteRecipe() {
//   const { indi } = useParams();
//   const [recipe, setRecipe] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [navigate, setNavigate] =useNavigate();
//   useEffect(() => {
//     const fetchingFav = async (indi) => {
//       try {
//         const res = await axios.get(`https://dummyjson.com/recipes/${indi}`);
//         if (res.status === 200) {
//           setRecipe(res.data);  // Assuming the data structure is like res.data.recipe
//           setLoading(false);
//           setNavigate(indi)
//         }
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchingFav(indi);
//   }, [indi]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       {recipe ? (
//         <div>
//           <h1>{recipe.name}</h1>
//           <p>{recipe.description}</p>
//           <ul>
//             {recipe.ingredients.map((ingredient, index) => (
//               <li key={index}>{ingredient} {navigate}</li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>No recipe found.</p>
//       )}
//     </div>
//   );
// }




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function FavouriteRecipe() {
  const { indi } = useParams(); // Get the recipe ID from URL parameters
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //const navigate = useNavigate(); // Correctly use useNavigate hook

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/recipes/${indi}`);
        if (res.status === 200) {
          setRecipe(res.data); // Adjust based on actual response structure
        } else {
          throw new Error('Failed to fetch recipe');
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [indi]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {recipe ? (
        <div>
          <h1>{recipe.name}</h1>
          <p>{recipe.description}</p>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No recipe found.</p>
      )}
    </div>
  );
}


