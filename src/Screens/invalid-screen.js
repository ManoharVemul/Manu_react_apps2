import React from "react"
import { Link } from "react-router-dom"

const InvalidScreen = ()=>{
return (
    <>
    <navBar/>
    <h3>Inavlid input 404 Error</h3>
    <Link path ={"/"} to = "./homeRecipeScreen.js">Go to Home</Link>
    </>
)
}
export default InvalidScreen