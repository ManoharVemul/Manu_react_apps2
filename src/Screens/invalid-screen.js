
import { Link } from "react-router-dom"


const InvalidScreen = ()=>{
return (
    <>
    <navBar/>
    <h3>Inavlid input 404 Error</h3>
    <button><Link to="./home-screen.js">Go to Home</Link></button>
   

    </>
)
}
export default InvalidScreen