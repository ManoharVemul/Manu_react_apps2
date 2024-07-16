import './style1.module.css'
const Header =()=>{
let arr = ["HOME","ABOUT","MYORDER","FAVORATE","PROFILE"]
const list = arr.map((each)=>(
    <h2 >{each}</h2>
)

)
return(
    <>{list}</>
)
}

export default Header