
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import RecipeNavBar from './recipeNavBar';
import { useParams } from 'react-router-dom';
import InvalidScreen from '../Screens/invalid-screen';

export default function ViewMore() {
    const { id } = useParams()
    const [viewrecipe, setViewrecipe] = useState([])
console.log(id)
    useEffect(
        () => {
            fetcingrecipe()
        },[]
    )

    const fetcingrecipe = async (index) => {
        try {
            const res = await axios.get(`https://dummyjson.com/recipes/${index}`);
            if (res.status === 200) {
                console.log(typeof(res.data.recipes))
                if (res.data && res.data.recipes) {
                    setViewrecipe(res.data.recipes);
                } else {
                    setViewrecipe([]);
                }
            } else {
                console.log("hi, I AM ERROR")
            }
        } catch { }
    }

    return (
            <div>
                <RecipeNavBar />
                {viewrecipe ? (
                    viewrecipe.length > 0 ? (
                        viewrecipe.map((each, index) => (
                            <div key={index}>
                                <h3>{each.name}</h3>
                                <img src={each.image} alt={each.name} width={180} height={180} />
                            </div>
                        ))
                    ) : (
                        <InvalidScreen />
                    )
                ) : (
                    <p>Loading...</p> 
                )}
            </div>
        );
    }
    
    




// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import RecipeNavBar from './recipeNavBar';
// import { useParams } from 'react-router-dom';
// import InvalidScreen from '../Screens/invalid-screen';

// export default function ViewMore() {
//     const { id } = useParams();
//     const [viewrecipe, setViewrecipe] = useState(null); // Changed initial state to null for better handling

//     useEffect(() => {
//         // Call the fetching function when the component mounts or id changes
//         fetcingrecipe(id);
//     }, [id]); // Added id to dependency array

//     const fetcingrecipe = async (indu) => {
//         try {
//             const res = await axios.get(`https://dummyjson.com/recipes/${indu}`);
//             if (res.status === 200) {
//                 // Check the structure of the response
//                 console.log(res.data);
//                 if (res.data && res.data.recipes) {
//                     setViewrecipe(res.data.recipes);
//                 } else {
//                     setViewrecipe([]); // Set to empty array or handle differently
//                 }
//             } else {
//                 console.error("API Error: ", res.status);
//                 setViewrecipe([]); // Set to empty array or handle differently
//             }
//         } catch (error) {
//             console.error("Fetching error: ", error);
//             setViewrecipe([]); // Set to empty array or handle differently
//         }
//     };

//     return (
//         <div>
//             <RecipeNavBar />
//             {viewrecipe ? (
//                 viewrecipe.length > 0 ? (
//                     viewrecipe.map((each, index) => (
//                         <div key={index}>
//                             <h3>{each.name}</h3>
//                             <img src={each.image} alt={each.name} width={180} height={180} />
//                         </div>
//                     ))
//                 ) : (
//                     <InvalidScreen />
//                 )
//             ) : (
//                 <p>Loading...</p> // Optional: display a loading message while fetching
//             )}
//         </div>
//     );
// }
