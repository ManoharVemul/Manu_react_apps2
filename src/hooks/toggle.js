import React ,{ useState } from "react";
const ChangeTheme = ()=>{
    const [theme,setTheme] = useState(true);
    
function change (){
   setTheme(pre=>!pre) 
}
    return(<div  style= {theme ? {backgroundColor :"white",color:"black",width:"500px" ,height:"500px"}:{backgroundColor :"black",color:"white",width:"500px" ,height:"500px"}}  >
<h1>Page in  {!theme  ? "dark mode" : "light mode" }</h1>

<button onClick={()=>{change()}}>{theme ? "dark mode" : "light mode"} </button>
    </div>)

};
export default ChangeTheme