import axios from 'axios';
import React, { useState } from 'react'
import CustomList from '../customList';

const RecipeList = () => {
    const [ listing, setListing ] = useState([]);
    const [loader, setLoader] = useState(true);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/recipes");
            if(response.status===200){
                setLoader(false)
                setListing(response.data.recipes) 
            }
        } catch (err) {

            setLoader((loader) => loader)
        }
     
    }
    const removeHandler = (index) => {
        const updatedData = listing.filter((ea, indu) => indu !== index);
        setListing(updatedData)
    }
    const adding = () => {
        const newList =[...listing, {
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
        setListing(newList)
    }

    const removeAll = () => {
        const removeData = []
        setListing(removeData)
    }

    return (
        <div>
            <button onClick={fetchProducts}>fetch data</button>
            {loader ? (
                <h3>the page is loading....</h3>
            ) : (
                <>
                    <button onClick={removeAll}>Delete All </button>
                    <button onClick={adding}>Add Recipe</button>
                    <table>     <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Ingredients</th>
                                <th>Instructions</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                        {listing.map((eachRes, index) =>
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
                    </table>
                </>
            )}
        </div>
    )
}
export default RecipeList




// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import CustomList from '../classComponant/classcustomList';

// const RecipeList = () => {
//     const [listing, setListing] = useState([]);
//     const [loader, setLoader] = useState(true);

//     const fetchProducts = async () => {
//         try {
//             const response = await axios.get("https://dummyjson.com/recipes");
//             console.log(response.data.recipes);
//             console.log(response.status);
//             if (response.status === 200) {
//                 setListing(response.data.recipes);
//                 setLoader(false);
//             }
//         } catch (err) {
//             console.error('Error fetching data:', err);
//             setLoader(false);
//         }
//     };

//     const removeHandler = (index) => {
//         const updatedData = listing.filter((_, indu) => indu !== index);
//         setListing(updatedData);
//     };

//     const adding = () => {
//         const newList = {
//             id: 31,
//             name: "Classic Margherita Pizza",
//             ingredients: [
//                 "Pizza dough",
//                 "Tomato sauce",
//                 "Fresh mozzarella cheese",
//                 "Fresh basil leaves",
//                 "Olive oil",
//                 "Salt and pepper to taste",
//             ],
//             instructions: [
//                 "Preheat the oven to 475°F (245°C).",
//                 "Roll out the pizza dough and spread tomato sauce evenly.",
//                 "Top with slices of fresh mozzarella and fresh basil leaves.",
//                 "Drizzle with olive oil and season with salt and pepper.",
//                 "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
//                 "Slice and serve hot.",
//             ],
//         };
//         setListing([...listing, newList]);
//     };

//     const removeAll = () => {
//         setListing([]);
//     };

//     useEffect(() => {
//         fetchProducts();
//     }, []);

//     return (
//         <div>
//             <button onClick={fetchProducts}>Fetch Data</button>
//             {loader ? (
//                 <h3>The page is loading...</h3>
//             ) : (
//                 <>
//                     <button onClick={removeAll}>Delete All</button>
//                     <button onClick={adding}>Add Recipe</button>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>#</th>
//                                 <th>Name</th>
//                                 <th>Ingredients</th>
//                                 <th>Instructions</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {listing.map((eachRes, index) => (
//                                 <tr key={eachRes.id}>
//                                     <td>{index + 1}</td>
//                                     <td>{eachRes.name}</td>
//                                     <td>
//                                         {console.log(eachRes.ingredients)}
//                                         <CustomList list={eachRes.ingredients} />
//                                     </td>
//                                     <td>
//                                     {console.log(eachRes.instructions)}
//                                         <CustomList list={eachRes.instructions} />
//                                     </td>
//                                     <td>
//                                         <button onClick={() => removeHandler(index)}>Delete</button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </>
//             )}
//         </div>
//     );
// };

// export default RecipeList;
